// @ts-ignore
declare module 'uuid';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersStore } from '../../store/user.store';
import { inject } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: 'add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser implements OnInit {
  addUserForm: FormGroup;
  isLoading = false;
  hidePassword = true;
  hideConfirmPassword = true;

  private dialogRef = inject(MatDialogRef<AddUser>)

  userRoles = [
    { value: 'admin', label: 'Administrator' },
    { value: 'staff', label: 'Staff' },
    //{ value: 'student', label: 'Student' }, Remove student role. Enable only in enrolment component of student management module
    { value: 'guardian', label: 'Guardian' }
  ];

  public usersStore = inject(UsersStore); // Assuming UsersStore is a service for managing users

  constructor(
    private fb: FormBuilder
  ) {
    this.addUserForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]], // Used for validation, not part of the final model
      role: ['student', [Validators.required]], // Default to 'student' as per model, can be changed by user
      info: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        middleName: [''],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        age: [0, [Validators.required, Validators.min(0)]], // Age will be calculated or set
        image: [''] // Optional, or can be handled by image upload
      }),
      contact: this.fb.group({
        phone: ['', [Validators.pattern(/^\+?[\d\s-()]+$/)]]
      }),
      //dateOfBirth: [''] // Used to calculate age, not directly in the model
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.addUserForm.get('dateOfBirth')?.valueChanges.subscribe(date => {
      if (date) {
        const age = this.calculateAge(date);
        this.addUserForm.get('info.age')?.setValue(age);
      } else {
        this.addUserForm.get('info.age')?.setValue(0);
      }
    });
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

  calculateAge(dateOfBirth: Date): number {
    const today = new Date();
    const dob = new Date(dateOfBirth);
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  }

  onSubmit(): void {
    if (this.addUserForm.valid) {
      this.isLoading = true;
      const formValue = this.addUserForm.value;

      // Construct the user object according to the provided TypeScript model
      const newUser = {
        email: formValue.email,
        password: formValue.password,
        role: formValue.role,
        info: {
          firstName: formValue.info.firstName,
          middleName: formValue.info.middleName,
          lastName: formValue.info.lastName,
          age: formValue.info.age,
          image: formValue.info.image || '' // Ensure image is a string, default to empty
        },
        contact: {
          phone: formValue.contact.phone || '' // Ensure phone is a string, default to empty
        }
      };

      // Ensure the newUser object includes required UserModel properties
      const userToAdd = {
        ...newUser,
        id: '', // or generate a temporary id if needed
        status: 'active', // or your default status
        createdAt: new Date().toISOString()
      };

      this.dialogRef.close(newUser);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  private markFormGroupTouched(): void {
    Object.keys(this.addUserForm.controls).forEach(key => {
      const control = this.addUserForm.get(key);
      if (control instanceof FormGroup) {
        Object.keys(control.controls).forEach(subKey => {
          const subControl = control.get(subKey);
          subControl?.markAsTouched();
        });
      } else {
        control?.markAsTouched();
      }
    });
  }

  isFieldInvalid(fieldName: string, groupName?: string): boolean {
    let field;
    if (groupName) {
      field = this.addUserForm.get(`${groupName}.${fieldName}`);
    } else {
      field = this.addUserForm.get(fieldName);
    }
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string, groupName?: string): string {
    let field;
    if (groupName) {
      field = this.addUserForm.get(`${groupName}.${fieldName}`);
    } else {
      field = this.addUserForm.get(fieldName);
    }

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

    if (fieldName === 'age' && field.hasError('min')) {
      return 'Age cannot be negative';
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