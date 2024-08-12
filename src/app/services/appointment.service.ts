import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Appointment {
  id: number;
  title: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointmentsSubject = new BehaviorSubject<Appointment[]>([]);
  appointments$ = this.appointmentsSubject.asObservable();
  private appointments: Appointment[] = [];
  private idCounter = 1;

  addAppointment(appointment: Appointment) {
    appointment.id = this.idCounter++;
    this.appointments.push(appointment);
    this.appointmentsSubject.next(this.appointments);
  }

  deleteAppointment(id: number) {
    this.appointments = this.appointments.filter(app => app.id !== id);
    this.appointmentsSubject.next(this.appointments);
  }

  moveAppointment(id: number, newDate: Date) {
    const appointment = this.appointments.find(app => app.id === id);
    if (appointment) {
      appointment.date = newDate;
      this.appointmentsSubject.next(this.appointments);
    }
  }

  getAppointmentsForDate(date: Date): Appointment[] {
    return this.appointments.filter(app => app.date.toDateString() === date.toDateString());
  }
}
