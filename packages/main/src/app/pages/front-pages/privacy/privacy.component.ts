import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  imports: [FooterComponent,],
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  lastUpdated: string = '2023-07-06';

  ngOnInit(): void {
    this.initAccordion();
  }

  private initAccordion(): void {
    setTimeout(() => {
      const accordionButtons = document.querySelectorAll('.accordion-button');
      accordionButtons.forEach((button) => {
        button.addEventListener('click', () => {
          // Cast to HTMLElement so TypeScript knows about nextElementSibling
          const content = (button.nextElementSibling as HTMLElement) || null;
          const isOpen = content?.style.display === 'block';

          // Close all accordion items
          document.querySelectorAll('.accordion-content').forEach((item) => {
            (item as HTMLElement).style.display = 'none';
          });

          // Remove active class from all buttons
          document.querySelectorAll('.accordion-button').forEach((btn) => {
            btn.classList.remove('active');
          });

          // Toggle current item
          if (!isOpen && content) {
            content.style.display = 'block';
            button.classList.add('active');
          }
        });
      });
    });
  }
}
