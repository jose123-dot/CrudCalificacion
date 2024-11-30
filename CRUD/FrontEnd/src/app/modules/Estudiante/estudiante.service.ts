import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../BaseService/base.service';
import { IEstudiante } from '../../Interfaces/IEstudiante';

@Injectable({
  providedIn: 'root',
})
export class EstudianteService extends BaseService<IEstudiante> {
  constructor(protected HttpClient: HttpClient) {
    super(HttpClient);
  }

  override getResourceUrl(): string {
    return '/estudiante';
  }
}
