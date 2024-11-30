import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../components/modal/modal.component';
import { MaestroModel } from '../model/maestro';
import { MaestroService } from '../maestro.service';
import { NotificationService } from '../../../components/notifications/notification.service';
import { IMaestro } from '../../../Interfaces/IMaestro';

@Component({
  selector: 'app-update-maestro',
  standalone: true,
  imports: [FormsModule, CommonModule, ModalComponent],
  templateUrl: './update-maestro.component.html',
  styleUrl: './update-maestro.component.css',
})
export class UpdateMaestroComponent {
  public isOpenModal = false;
  maestro: MaestroModel = new MaestroModel();

  constructor(
    private maestroService: MaestroService,
    private notification: NotificationService
  ) {}

  openModal() {
    this.isOpenModal = true;
  }

  closeModal() {
    this.isOpenModal = false;
  }

  setMaestro(maestro: MaestroModel) {
    this.maestro = maestro;
    this.openModal();
  }

  updateMaestro() {
    const params = {
      id: this.maestro._id,
    };
    console.log(params);
    console.log('maestro updated');
    this.openModal();
    this.maestroService
      .update(this.maestro as IMaestro, params)
      .subscribe({
        next: (data) => {
          console.log('maestro updated', data);
          this.notification.showSuccessMessage('maestro actualizada').then();
          this.closeModal();
        },
        error: (error) => {
          console.error('Error updating maestro', error);
          this.notification.showErrorMessage(error.error.message).then();
        },
      });
  }
}
