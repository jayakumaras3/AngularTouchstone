import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ProductService } from '../../services/apps/product/product.service';
import { NavService } from '../../services/nav.service';

interface ProductDataItem {
  id: number;
  product_name: string;
  skill?: string;
  categories?: string[];
  duration?: string;
  language?: string;
  description?: string;
  objectives?: string;
}

interface DiaCourse {
  id: number;
  title: string;
  category: string;
  duration: number;
  language: string;
  description: string;
  objectives: string;
  url: string;
  keywords: string[];
  product?: any; // Store the full product object for navigation
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  courses?: DiaCourse[];
}

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'about',
  'how', 'what', 'why', 'when', 'where', 'does', 'do', 'did', 'can', 'could', 'should', 'would', 'tell',
  'me', 'please', 'explain', 'describe', 'show', 'know', 'this', 'that', 'it', 'from', 'as', 'be', 'have',
  'has', 'find', 'search', 'list', 'courses', 'course', 'training'
]);

@Component({
  selector: 'app-dia-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MatIconModule],
  templateUrl: './dia-assistant.component.html',
  styleUrls: ['./dia-assistant.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiaAssistantComponent implements OnInit, OnDestroy {
  @ViewChild('scrollAnchor', { static: false }) scrollAnchor?: ElementRef<HTMLDivElement>;
  @ViewChild('diaPanel', { static: false }) diaPanel?: ElementRef<HTMLDivElement>;
  @ViewChild('diaInput', { static: false }) diaInputField?: ElementRef<HTMLInputElement>;

  isOpen = false;
  isTyping = false;
  isReady = false;
  progress = 0;
  fabVisible = false; // For entrance animation

  inputText = '';
  messages: ChatMessage[] = [];
  private courses: DiaCourse[] = [];

  // iOS keyboard handling
  isIOS = false;
  keyboardHeight = 0;
  private visualViewportHandler?: () => void;

  constructor(
    private readonly http: HttpClient,
    private readonly cdr: ChangeDetectorRef,
    private readonly router: Router,
    private readonly productService: ProductService,
    private readonly navService: NavService
  ) {
    this.initializeBrain();
    this.detectIOS();
  }

  ngOnInit(): void {
    // Trigger FAB entrance animation after a brief delay
    setTimeout(() => {
      this.fabVisible = true;
      this.cdr.markForCheck();
    }, 500);

    // Setup iOS keyboard handling
    if (this.isIOS) {
      this.setupIOSKeyboardHandling();
    }
  }

  ngOnDestroy(): void {
    // Cleanup iOS keyboard listeners
    if (this.isIOS && this.visualViewportHandler && window.visualViewport) {
      window.visualViewport.removeEventListener('resize', this.visualViewportHandler);
      window.visualViewport.removeEventListener('scroll', this.visualViewportHandler);
    }
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.cdr.markForCheck();
    this.scrollToBottom();
  }

  close(): void {
    this.isOpen = false;
    this.cdr.markForCheck();
  }

  sendMessage(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    const text = this.inputText.trim();
    if (!text) {
      return;
    }

    this.messages = [
      ...this.messages,
      { id: Date.now().toString(), sender: 'user', text },
    ];
    this.inputText = '';
    this.isTyping = true;
    this.cdr.markForCheck();
    this.scrollToBottom();

    setTimeout(() => {
      const response = this.generateResponse(text);
      this.messages = [
        ...this.messages,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: response.message,
          courses: response.courses,
        },
      ];
      this.isTyping = false;
      this.cdr.markForCheck();
      this.scrollToBottom();
    }, 600);
  }

  formatUrl(url: string): string {
    if (!url) {
      return '#';
    }
    return url.startsWith('http') ? url : `https://${url}`;
  }

  /**
   * Navigate to course details page using Angular Router
   * Follows the same pattern as Course Catalog and SME Catalog
   * @param course The course to navigate to
   */
  goToCourseDetails(course: DiaCourse): void {
    if (!course || !course.product) {
      console.error('Invalid course data:', course);
      return;
    }

    const courseId = course.product.id;

    // Set referrer to course catalog (where user should return to)
    const currentUrl = '/coursecatalog';
    this.navService.setReferrerUrl(currentUrl);

    // Set the selected product for the details page
    this.productService.setProduct(course.product);

    // Navigate with courseId, source, and state for reliable back navigation
    this.router.navigate(['/coursedetails', courseId], {
      queryParams: { source: 'chatbot' },
      queryParamsHandling: 'merge',
      state: { previousUrl: currentUrl }
    });

    // Close chatbot after navigation for better UX
    this.close();
  }

  trackByMessage(index: number, item: ChatMessage): string {
    return item.id;
  }

  trackByCourse(index: number, item: DiaCourse): number {
    return item.id;
  }

  private initializeBrain(): void {
    this.progress = 10;
    this.seedWelcomeMessage('Hi! I\'m Dia, your learning assistant. Enter a subject, skill, or interest (e.g., safety, marketing, health etc.) to see related course instantly');

    this.http.get<ProductDataItem[]>('assets/data/product-data.json').subscribe({
      next: (items) => {
        this.progress = 60;
        this.courses = items.map((item) => this.mapToDiaCourse(item));
        this.progress = 100;
        this.isReady = true;
        this.cdr.markForCheck();
      },
      error: () => {
        this.progress = 100;
        this.isReady = true;
        this.seedWelcomeMessage('Hi! I\'m Dia. I\'m ready to help, but I couldn\'t load the course catalog.');
        this.cdr.markForCheck();
      },
    });
  }

  private seedWelcomeMessage(text: string): void {
    if (this.messages.length === 0) {
      this.messages = [
        { id: 'welcome', sender: 'bot', text },
      ];
    }
  }
  private decodeHtmlEntities(text: string): string {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }
  private mapToDiaCourse(item: ProductDataItem): DiaCourse {
    const title = item.product_name ?? 'Untitled Course';
    const category = item.skill ?? (item.categories?.[0] ?? 'General');
    const duration = Number(item.duration ?? 0);
    const language = item.language ?? 'English';

    const description = this.decodeHtmlEntities(
      this.stripHtml(item.description ?? '')
    );

    const objectives = this.decodeHtmlEntities(
      this.stripHtml(item.objectives ?? '')
    );

    const url = `www.docheck.com/courses/${item.id}`;

    const keywords = this.tokenize(
      [title, category, language, description, objectives, ...(item.categories ?? [])].join(' ')
    );

    return {
      id: item.id,
      title,
      category,
      duration,
      language,
      description,
      objectives,
      url,
      keywords,
      product: item as any,
    };
  }


  private generateResponse(query: string): { message: string; courses: DiaCourse[] } {
    if (!this.isReady || this.courses.length === 0) {
      return {
        message: 'I\'m still loading my course knowledge. Please wait a moment!',
        courses: [],
      };
    }

    const tokens = this.tokenize(query);
    if (tokens.length === 0 || (tokens.length < 2 && ['hi', 'hello', 'dia'].some((greet) => query.toLowerCase().includes(greet)))) {
      return {
        message: 'Hello! I\'m Dia, your LMS assistant. Tell me what skills you want to learn, and I\'ll find the right courses for you.',
        courses: [],
      };
    }

    const scored = this.courses
      .map((course) => ({
        course,
        score: this.calculateScore(tokens, course),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.course);

    if (scored.length === 0) {
      return {
        message: 'I couldn\'t find any courses matching your specific search. Try broader keywords like "Cyber Security", "ESG", or "Leadership".',
        courses: [],
      };
    }

    return {
      message: `Based on your interest in "${query}", here are some recommended courses:`,
      courses: scored,
    };
  }

  private calculateScore(tokens: string[], course: DiaCourse): number {
    let score = 0;
    const category = course.category.toLowerCase();
    const title = course.title.toLowerCase();
    const description = course.description.toLowerCase();
    const objectives = course.objectives.toLowerCase();
    const keywordSet = new Set(course.keywords);

    tokens.forEach((token) => {
      if (keywordSet.has(token)) score += 15;
      if (category.includes(token)) score += 10;
      if (title.includes(token)) score += 8;
      if (description.includes(token)) score += 2;
      if (objectives.includes(token)) score += 2;
    });

    return score;
  }

  private tokenize(text: string): string[] {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter((word) => word.length > 1 && !STOP_WORDS.has(word));
  }

  private stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  private scrollToBottom(): void {
    requestAnimationFrame(() => {
      this.scrollAnchor?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  }

  /**
   * Detect if the device is iOS (iPhone/iPad)
   */
  private detectIOS(): void {
    const userAgent = window.navigator.userAgent.toLowerCase();
    this.isIOS = /iphone|ipad|ipod/.test(userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  /**
   * Setup iOS-specific keyboard handling using Visual Viewport API
   * This ensures the submit button remains clickable when keyboard opens
   */
  private setupIOSKeyboardHandling(): void {
    if (!window.visualViewport) {
      return;
    }

    this.visualViewportHandler = () => {
      if (!this.isOpen || !this.diaPanel) {
        return;
      }

      const viewport = window.visualViewport!;
      const windowHeight = window.innerHeight;
      const viewportHeight = viewport.height;

      // Calculate keyboard height (difference between window and viewport)
      const calculatedKeyboardHeight = windowHeight - viewportHeight;

      // Only adjust if keyboard is significantly open (> 150px)
      if (calculatedKeyboardHeight > 150) {
        this.keyboardHeight = calculatedKeyboardHeight;

        // Apply dynamic height to panel
        const panel = this.diaPanel.nativeElement;
        const maxPanelHeight = viewportHeight - 40; // 40px padding from top
        panel.style.maxHeight = `${maxPanelHeight}px`;
        panel.style.height = `${maxPanelHeight}px`;
      } else {
        // Keyboard closed, reset height
        this.keyboardHeight = 0;
        if (this.diaPanel) {
          const panel = this.diaPanel.nativeElement;
          panel.style.maxHeight = '';
          panel.style.height = '';
        }
      }

      this.cdr.markForCheck();
    };

    // Listen to viewport changes
    window.visualViewport.addEventListener('resize', this.visualViewportHandler);
    window.visualViewport.addEventListener('scroll', this.visualViewportHandler);
  }

  /**
   * Handle input focus - scroll into view on iOS
   */
  onInputFocus(): void {
    if (!this.isIOS) {
      return;
    }

    // Small delay to let keyboard animation start
    setTimeout(() => {
      // Scroll the input container into view
      if (this.diaInputField) {
        this.diaInputField.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }

      // Ensure messages area is scrolled to bottom
      this.scrollToBottom();
    }, 300);
  }
}
