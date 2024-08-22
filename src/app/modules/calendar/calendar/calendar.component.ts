import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentFormComponent } from '../../appointment/appointment-form/appointment-form.component';
import { CalendarViewComponent } from '../calendar-view/calendar-view.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    AppointmentFormComponent,
    CalendarViewComponent
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {}
