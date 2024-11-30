import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../components/modal/modal.component';
import { EstudianteModel } from '../model/estudiante';
import { EstudianteService } from '../estudiante.service';
import { NotificationService } from '../../../components/notifications/notification.service';
import { IEstudiante } from '../../../Interfaces/IEstudiante';

@Component({
  selector: 'app-update-estudiante',
  standalone: true,
  imports: [FormsModule, CommonModule, ModalComponent],
  templateUrl: './update-estudiante.component.html',
  styleUrl: './update-estudiante.component.css',
})
export class UpdateEstudianteComponent {
  public isOpenModal = false;
  Estudiante: EstudianteModel = new EstudianteModel();

  constructor(
    private estudianteService: EstudianteService,
    private notification: NotificationService
  ) {}

  openModal() {
    this.isOpenModal = true;
  }

  closeModal() {
    this.isOpenModal = false;
  }

  setEstudiante(estudiante: EstudianteModel) {
    this.Estudiante = estudiante;
    this.openModal();
  }

  updateEstudiante() {
    const params = {
      id: this.Estudiante._id,
    };
    console.log(params);
    console.log('Estudiante updated');
    this.openModal();
    this.estudianteService
      .update(this.Estudiante as IEstudiante, params)
      .subscribe({
        next: (data) => {
          console.log('Estudiante updated', data);
          this.notification.showSuccessMessage('Estudiante actualizada').then();
          this.closeModal();
        },
        error: (error) => {
          console.error('Error updating Estudiante', error);
          this.notification.showErrorMessage(error.error.message).then();
        },
      });
  }
}
