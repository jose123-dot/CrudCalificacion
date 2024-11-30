import { Component, EventEmitter, Output } from '@angular/core';
import {EstudianteService } from '../estudiante.service';
import { ModalComponent } from '../../../components/modal/modal.component';
import { EstudianteModel } from '../model/estudiante';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IEstudiante } from '../../../Interfaces/IEstudiante';

@Component({
  selector: 'app-create-estudiante',
  standalone: true,
  imports: [ModalComponent, FormsModule, CommonModule],
  templateUrl: './create-estudiante.component.html',
  styleUrl: './create-estudiante.component.css',
})
export class CreateEstudianteComponent {
  @Output() data = new EventEmitter();

  public isOpenModal = false;
  estudiante: EstudianteModel | IEstudiante = new EstudianteModel();

  constructor(private estudianteService: EstudianteService) {}

  createEstudiante() {
    this.estudianteService
      .create(this.estudiante as IEstudiante)
      .subscribe((response) => {
        console.log(response);
        this.closeModal();
        this.data.emit(response);
        this.estudiante = new EstudianteModel();
      });
  }

  openModal() {
    this.isOpenModal = true;
  }

  closeModal() {
    this.isOpenModal = false;
  }
}
