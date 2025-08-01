import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { AuthStore } from '../../store/auth.store';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
  
  userLoginForm!: FormGroup;
  isLoading = false;
  hidePassword = true;

  private readonly authService = inject(AuthService);
  public authStore = inject(AuthStore);

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.userLoginForm = this.fb.group({
      email: ['abdulazizladan@gmail.com', [
        Validators.required, 
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]],
      password: ['password', [
        Validators.required, 
        Validators.minLength(8),
        //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
      ]]
    });
  }

  ngOnInit(): void {
    // Initialize any additional setup if needed
  }

  submit(): void {
    //this.authService.login(this.userLoginForm.value)
    this.authStore.login(this.userLoginForm.value)
  }

  private markFormGroupTouched(): void {
    Object.keys(this.userLoginForm.controls).forEach(key => {
      const control = this.userLoginForm.get(key);
      control?.markAsTouched();
    });
  }

  // Validation helper methods
  isFieldInvalid(fieldName: string): boolean {
    const field = this.userLoginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.userLoginForm.get(fieldName);
    
    if (!field || !field.errors) {
      return '';
    }

    if (field.hasError('required')) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }
    
    if (fieldName === 'email') {
      if (field.hasError('email')) {
        return 'Please enter a valid email address';
      }
      if (field.hasError('pattern')) {
        return 'Please enter a valid email format';
      }
    }
    
    if (fieldName === 'password') {
      if (field.hasError('minlength')) {
        return 'Password must be at least 8 characters long';
      }
      if (field.hasError('pattern')) {
        return 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      }
    }
    
    return '';
  }

  // Password visibility toggle
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  // Form reset
  resetForm(): void {
    this.userLoginForm.reset();
    this.isLoading = false;
  }
}
