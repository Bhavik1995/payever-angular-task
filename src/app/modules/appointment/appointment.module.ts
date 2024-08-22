import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

@NgModule({
  // declarations: [AppointmentFormComponent],
  imports: [
    CommonModule,
    AppointmentFormComponent,
    RouterModule.forChild([
      {
        path: '', component: AppointmentFormComponent
      }
    ])
  ]
})
export class AppointmentModule { }
