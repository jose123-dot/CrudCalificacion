import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { MaestroService } from './../maestro.service';
import { DatatableComponent } from '../../../components/datatable/datatable.component';
import { CreateMaestroComponent } from '../create-maestro/create-maestro.component';
import { NormalizeResponse } from '../../../Interfaces/NormalizeResponse';
import { IMaestro } from '../../../Interfaces/IMaestro';
import { UpdateMaestroComponent } from '../update-maestro/update-maestro.component';
import { NotificationService } from '../../../components/notifications/notification.service';

@Component({
  selector: 'app-Maestro',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    FormsModule,
    DatatableComponent,
    CreateMaestroComponent,
    UpdateMaestroComponent,
  ],
  templateUrl: './maestro.component.html',
  styleUrl: './maestro.component.css',
})
export class MaestroComponent implements OnInit {
  data: IMaestro[] = [];
  columns: string[] = [];
  iconMenu = {};

  @ViewChild(UpdateMaestroComponent)
  updateMaestroComponent!: UpdateMaestroComponent;
  constructor(
    private MaestroService: MaestroService,
    private notification: NotificationService
  ) {}
  ngOnInit() {
    this.MaestroService.getAll().subscribe(
      (data: NormalizeResponse<IMaestro[]>) => {
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

  updateMaestro(Maestro: any) {
    console.log(Maestro);
    this.updateMaestroComponent.setMaestro(Maestro);
  }

  deleteMaestro(maestro: any) {
    const params = {
      id: maestro._id,
    };

    this.notification
      .showWarningMessage('¿Estas seguro de eliminar el Maestro?')
      .then((result) => {
        if (result.isConfirmed) {
          this.MaestroService.delete(undefined, params).subscribe((data) => {
            this.refreshData();
          });
        }
      });
  }

  refreshData() {
    this.MaestroService.getAll().subscribe(
      (data: NormalizeResponse<IMaestro[]>) => {
        console.log(data);
        this.data = data.data;
      }
    );
  }
}
