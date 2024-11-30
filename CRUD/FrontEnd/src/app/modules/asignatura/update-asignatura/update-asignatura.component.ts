import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../components/modal/modal.component';
import { AsignaturaModel } from '../model/asignatura';
import { AsignaturaService } from '../asignatura.service';
import { NotificationService } from '../../../components/notifications/notification.service';
import { IAsignatura } from '../../../Interfaces/IAsignatura';

@Component({
  selector: 'app-update-asignatura',
  standalone: true,
  imports: [FormsModule, CommonModule, ModalComponent],
  templateUrl: './update-asignatura.component.html',
  styleUrl: './update-asignatura.component.css',
})
export class UpdateAsignaturaComponent {
  public isOpenModal = false;
  asignatura: AsignaturaModel = new AsignaturaModel();

  constructor(
    private asignaturaService: AsignaturaService,
    private notification: NotificationService
  ) {}

  openModal() {
    this.isOpenModal = true;
  }

  closeModal() {
    this.isOpenModal = false;
  }

  setAsignatura(asignatura: AsignaturaModel) {
    this.asignatura = asignatura;
    this.openModal();
  }

  updateAsignatura() {
    const params = {
      id: this.asignatura._id,
    };
    console.log(params);
    console.log('Asignatura updated');
    this.openModal();
    this.asignaturaService.update(this.asignatura as IAsignatura, params).subscribe({
      next: (data) => {
        console.log('Asignatura updated', data);
        this.notification.showSuccessMessage('Asignatura actualizada').then();
        this.closeModal();
      },
      error: (error) => {
        console.error('Error updating Asignatura', error);
        this.notification.showErrorMessage(error.error.message).then();
      },
    });
  }
}
