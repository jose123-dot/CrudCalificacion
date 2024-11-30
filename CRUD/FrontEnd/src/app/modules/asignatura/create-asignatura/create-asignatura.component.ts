import { Component, EventEmitter, Output } from '@angular/core';
import { AsignaturaService } from '../asignatura.service';
import { ModalComponent } from '../../../components/modal/modal.component';
import { AsignaturaModel } from '../model/asignatura';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IAsignatura } from '../../../Interfaces/IAsignatura';

@Component({
  selector: 'app-create-asignatura',
  standalone: true,
  imports: [ModalComponent, FormsModule, CommonModule],
  templateUrl: './create-asignatura.component.html',
  styleUrl: './create-asignatura.component.css',
})
export class CreateAsisnaturaComponent {
  @Output() data = new EventEmitter();

  public isOpenModal = false;
  asignatura: AsignaturaModel | IAsignatura = new AsignaturaModel();

  constructor(private asignaturaService: AsignaturaService) {}

  createAsignatura() {
    this.asignaturaService.create(this.asignatura as IAsignatura).subscribe((response) => {
      console.log(response);
      this.closeModal();
      this.data.emit(response);
      this.asignatura = new AsignaturaModel();
    });
  }

  openModal() {
    this.isOpenModal = true;
  }

  closeModal() {
    this.isOpenModal = false;
  }
}
