import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../components/modal/modal.component';
import { AsistenciaModel } from '../model/asistencia';
import {AsistenciaService } from '../asistencia.service';
import { NotificationService } from '../../../components/notifications/notification.service';
import { IAsistencia } from '../../../Interfaces/IAsistencia';

@Component({
  selector: 'app-update-asistencia',
  standalone: true,
  imports: [FormsModule, CommonModule, ModalComponent],
  templateUrl: './update-asistencia.component.html',
  styleUrl: './update-asistencia.component.css',
})
export class UpdateAsistenciaComponent {
  public isOpenModal = false;
  Asistencia: AsistenciaModel = new AsistenciaModel();

  constructor(
    private asistenciaService: AsistenciaService,
    private notification: NotificationService
  ) {}

  openModal() {
    this.isOpenModal = true;
  }

  closeModal() {
    this.isOpenModal = false;
  }

  setAsistencia(Asistencia: AsistenciaModel) {
    this.Asistencia = Asistencia;
    this.openModal();
  }

  updateAsistencia() {
    const params = {
      id: this.Asistencia._id,
    };
    console.log(params);
    console.log('Asistencia updated');
    this.openModal();
    this.asistenciaService
      .update(this.Asistencia as IAsistencia, params)
      .subscribe({
        next: (data) => {
          console.log('Asistencia updated', data);
          this.notification.showSuccessMessage('Asistencia actualizada').then();
          this.closeModal();
        },
        error: (error) => {
          console.error('Error updating Asistencia', error);
          this.notification.showErrorMessage(error.error.message).then();
        },
      });
  }
}
