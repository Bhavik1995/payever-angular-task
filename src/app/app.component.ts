import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './modules/calendar/calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarComponent],
  template: '<app-calendar></app-calendar>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-calendar-app';
}
