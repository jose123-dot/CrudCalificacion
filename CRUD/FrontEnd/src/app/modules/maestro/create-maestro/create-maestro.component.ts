import { Component, EventEmitter, Output } from '@angular/core';
import { MaestroService } from '../maestro.service';
import { ModalComponent } from '../../../components/modal/modal.component';
import { MaestroModel } from '../model/maestro';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IMaestro } from '../../../Interfaces/IMaestro';

@Component({
  selector: 'app-create-maestro',
  standalone: true,
  imports: [ModalComponent, FormsModule, CommonModule],
  templateUrl: './create-maestro.component.html',
  styleUrl: './create-maestro.component.css',
})
export class CreateMaestroComponent {
  @Output() data = new EventEmitter();

  public isOpenModal = false;
  maestro: MaestroModel | IMaestro = new MaestroModel();

  constructor(private MaestroService: MaestroService) {}

  createMaestro() {
    this.MaestroService
      .create(this.maestro as IMaestro)
      .subscribe((response) => {
        console.log(response);
        this.closeModal();
        this.data.emit(response);
        this.maestro = new MaestroModel();
      });
  }

  openModal() {
    this.isOpenModal = true;
  }

  closeModal() {
    this.isOpenModal = false;
  }
}
