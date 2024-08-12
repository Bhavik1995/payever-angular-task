import { Component, OnInit } from '@angular/core';
import { AppointmentService, Appointment } from '../../services/appointment.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop'; // Import DragDropModule here
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calendar-view',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {
  appointments: Appointment[] = [];
  hours = Array.from({ length: 24 }, (_, i) => i);

  currentDate: Date = new Date();

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.appointmentService.appointments$.subscribe(appointments => {
      this.appointments = appointments;
    });
  }

  getAppointmentsForDay(day: number): Appointment[] {
    const today = new Date();
    const date = new Date(today.getFullYear(), today.getMonth(), day);
    return this.appointmentService.getAppointmentsForDate(date);
  }

  deleteAppointment(id: number) {
    this.appointmentService.deleteAppointment(id);
  }

  drop(event: CdkDragDrop<Appointment[]>, date: Date) {
    const newDate = new Date(date);
    newDate.setHours(event.container.data[event.currentIndex].date.getHours());
    newDate.setMinutes(event.container.data[event.currentIndex].date.getMinutes());
    const appointmentId = event.container.data[event.currentIndex].id;
    this.appointmentService.moveAppointment(appointmentId, newDate);
  }

  getAppointmentDuration(appointment: Appointment): number {
    return 1;
  }

  trackById(index: number, item: Appointment): number {
    return item.id;
  }
}
