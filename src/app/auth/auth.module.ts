import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// TODO: Create these missing modules and components
 import { AuthRoutingModule } from './auth-routing-module';
import { Login } from './components/login/login'
 import { ResetPassword } from './components/reset-password/reset-password';


@NgModule({
  declarations: [
    Login,
    ResetPassword
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule, 
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
