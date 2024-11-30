import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { AsignaturaService } from './../asignatura.service';
import { DatatableComponent } from '../../../components/datatable/datatable.component';
import { CreateAsisnaturaComponent } from '../create-asignatura/create-asignatura.component';
import { NormalizeResponse } from '../../../Interfaces/NormalizeResponse';
import { IAsignatura } from '../../../Interfaces/IAsignatura';
import { UpdateAsignaturaComponent } from '../update-asignatura/update-asignatura.component';
import { NotificationService } from '../../../components/notifications/notification.service';

@Component({
  selector: 'app-asignatura',
  standalone: true,
imports: [
    CommonModule,
    ModalComponent,
    FormsModule,
    DatatableComponent,
    CreateAsisnaturaComponent,
    UpdateAsignaturaComponent, 
  ],
  templateUrl: './asignatura.component.html',
  styleUrl: './asignatura.component.css',
})
export class AsignaturaComponent implements OnInit {
  data: IAsignatura[] = [];
  columns: string[] = [];
  iconMenu = {};

  @ViewChild(UpdateAsignaturaComponent) updateAsignaturaComponent!: UpdateAsignaturaComponent;
  constructor(
    private AsignaturaService: AsignaturaService,
    private notification: NotificationService
  ) {}
  ngOnInit() {
    this.AsignaturaService
      .getAll()
      .subscribe((data: NormalizeResponse<IAsignatura[]>) => {
        this.columns = ['nombre', 'descripcion'];

        this.data = data.data;
      });
  }

  updateAsignatura(asignatura: any) {
    console.log(asignatura);
    this.updateAsignaturaComponent.setAsignatura(asignatura);
  }

  deleteAsignatura(Asignatura: any) {
    const params = {
      id: Asignatura._id,
    };

    this.notification
      .showWarningMessage('¿Estas seguro de eliminar la Asignatura?')
      .then((result) => {
        if (result.isConfirmed) {
          this.AsignaturaService.delete(undefined, params).subscribe((data) => {
            this.refreshData();
          });
        }
      });
  }

  refreshData() {
    this.AsignaturaService
      .getAll()
      .subscribe((data: NormalizeResponse<IAsignatura[]>) => {
        console.log(data);
        this.data = data.data;
      });
  }
}
