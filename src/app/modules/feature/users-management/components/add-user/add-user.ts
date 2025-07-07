import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser implements OnInit {
  
  addUserForm: FormGroup;
  isLoading = false;
  hidePassword = true;
  hideConfirmPassword = true;

  userRoles = [
    { value: 'admin', label: 'Administrator' },
    { value: 'staff', label: 'Staff' },
    { value: 'student', label: 'Student' },
    { value: 'guardian', label: 'Guardian' }
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddUser>
  ) {
    this.addUserForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      phone: ['', [Validators.pattern(/^\+?[\d\s-()]+$/)]],
      address: [''],
      dateOfBirth: ['']
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    
    return null;
  }

  onSubmit(): void {
    if (this.addUserForm.valid) {
      this.isLoading = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Add user form submitted:', this.addUserForm.value);
        this.isLoading = false;
        this.dialogRef.close(this.addUserForm.value);
      }, 1500);
    } else {
      this.markFormGroupTouched();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  private markFormGroupTouched(): void {
    Object.keys(this.addUserForm.controls).forEach(key => {
      const control = this.addUserForm.get(key);
      control?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.addUserForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.addUserForm.get(fieldName);
    
    if (!field || !field.errors) {
      return '';
    }

    if (field.hasError('required')) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }
    
    if (fieldName === 'email' && field.hasError('email')) {
      return 'Please enter a valid email address';
    }
    
    if (fieldName === 'password' && field.hasError('minlength')) {
      return 'Password must be at least 8 characters long';
    }
    
    if (fieldName === 'confirmPassword' && field.hasError('passwordMismatch')) {
      return 'Passwords do not match';
    }
    
    if (fieldName === 'phone' && field.hasError('pattern')) {
      return 'Please enter a valid phone number';
    }
    
    return '';
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }
}
