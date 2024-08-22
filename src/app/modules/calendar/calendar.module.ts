import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';

@NgModule({
  // declarations: [CalendarComponent, CalendarViewComponent],
  imports: [
    CommonModule,
    CalendarComponent,
    CalendarViewComponent,
    RouterModule.forChild([
      {
        path: '', component: CalendarComponent
      },
      {
        path: 'view', component: CalendarViewComponent
      }
    ])
  ]
})
export class CalendarModule { }
