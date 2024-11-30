import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { EstudianteService } from './../estudiante.service';
import { DatatableComponent } from '../../../components/datatable/datatable.component';
import { CreateEstudianteComponent } from '../create-estudiante/create-estudiante.component';
import { NormalizeResponse } from '../../../Interfaces/NormalizeResponse';
import { IEstudiante } from '../../../Interfaces/IEstudiante';
import { UpdateEstudianteComponent } from '../update-estudiante/update-estudiante.component';
import { NotificationService } from '../../../components/notifications/notification.service';

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    FormsModule,
    DatatableComponent,
    CreateEstudianteComponent,
    UpdateEstudianteComponent,
  ],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css',
})
export class EstudianteComponent implements OnInit {
  data: IEstudiante[] = [];
  columns: string[] = [];
  iconMenu = {};

  @ViewChild(UpdateEstudianteComponent)
  updateEstudianteComponent!: UpdateEstudianteComponent;
  constructor(
    private EstudianteService: EstudianteService,
    private notification: NotificationService
  ) {}
  ngOnInit() {
    this.EstudianteService.getAll().subscribe(
      (data: NormalizeResponse<IEstudiante[]>) => {
        this.columns = [
          'nombre',
          'apellido',
          'matricula',
          'tipoDocumento',
          'documento',
          'fechaNacimiento',
          'direccion',
          'sector',
          'ciudad',
          'estatus',
        ];


        this.data = data.data;
      }
    );
  }

  updateEstudiante(Estudiante: any) {
    console.log(Estudiante);
    this.updateEstudianteComponent.setEstudiante(Estudiante);
  }

  deleteEstudiante(Estudiante: any) {
    const params = {
      id: Estudiante._id,
    };

    this.notification
      .showWarningMessage('¿Estas seguro de eliminar el Estudiante?')
      .then((result) => {
        if (result.isConfirmed) {
          this.EstudianteService.delete(undefined, params).subscribe((data) => {
            this.refreshData();
          });
        }
      });
  }

  refreshData() {
    this.EstudianteService.getAll().subscribe(
      (data: NormalizeResponse<IEstudiante[]>) => {
        console.log(data);
        this.data = data.data;
      }
    );
  }
}
