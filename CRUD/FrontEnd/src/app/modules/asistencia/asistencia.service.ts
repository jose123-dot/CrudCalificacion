import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../BaseService/base.service';
import { IAsistencia } from '../../Interfaces/IAsistencia';

@Injectable({
  providedIn: 'root',
})
export class AsistenciaService extends BaseService<IAsistencia> {
  constructor(protected HttpClient: HttpClient) {
    super(HttpClient);
  }

  override getResourceUrl(): string {
    return '/asistencia';
  }
}
