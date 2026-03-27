import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuickAccessComponent } from './quickaccess.component';
import { AuthService } from '../../../services/login/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('QuickAccessComponent', () => {
  let component: QuickAccessComponent;
  let fixture: ComponentFixture<QuickAccessComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  let activatedRoute: any;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['quickAccessLogin']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    activatedRoute = {
      queryParams: of({ username: 'testuser' })
    };

    await TestBed.configureTestingModule({
      imports: [QuickAccessComponent],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    }).compileComponents();

    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture = TestBed.createComponent(QuickAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with username from route params', (done) => {
    setTimeout(() => {
      expect(component.username).toBe('testuser');
      done();
    }, 100);
  });

  it('should show error when no username provided', () => {
    activatedRoute.queryParams = of({});
    component.ngOnInit();
    expect(component.errorMessage).toContain('Username not provided');
  });

  it('should validate form on submit with empty password', () => {
    component.form.get('password')?.setValue('');
    component.submit();
    expect(component.submitted).toBe(true);
    expect(authService.quickAccessLogin).not.toHaveBeenCalled();
  });

  it('should call quickAccessLogin on successful form submission', () => {
    authService.quickAccessLogin.and.returnValue(of({ success: true, message: 'Login successful!' }));
    component.username = 'testuser';
    component.form.get('password')?.setValue('password123');

    component.submit();

    expect(authService.quickAccessLogin).toHaveBeenCalledWith('testuser', 'password123');
  });

  it('should handle login error', () => {
    const errorResponse = { error: { message: 'Invalid password' } };
    authService.quickAccessLogin.and.returnValue(throwError(() => errorResponse));
    component.username = 'testuser';
    component.form.get('password')?.setValue('wrongpassword');

    component.submit();

    expect(component.loading).toBe(false);
    expect(component.errorMessage).toContain('Invalid password');
  });

  it('should navigate after successful login', (done) => {
    authService.quickAccessLogin.and.returnValue(of({ success: true, token: 'test-token', userId: '123' }));
    component.username = 'testuser';
    component.form.get('password')?.setValue('password123');

    component.submit();

    setTimeout(() => {
      expect(router.navigate).toHaveBeenCalledWith(['/dashboards/dashboard1']);
      done();
    }, 1600);
  });
});
