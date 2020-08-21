import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { PasswordStrenghtComponent } from '../password-strenght/password-strenght.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    RegistrationPageRoutingModule
  ],
  declarations: [RegistrationPage,PasswordStrenghtComponent]
})
export class RegistrationPageModule {}
