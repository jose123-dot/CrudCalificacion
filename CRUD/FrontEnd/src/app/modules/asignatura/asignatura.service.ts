import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../BaseService/base.service';
import { IAsignatura } from '../../Interfaces/IAsignatura';

@Injectable({
  providedIn: 'root',
})
export class AsignaturaService extends BaseService<IAsignatura> {
  constructor(protected HttpClient: HttpClient) {
    super(HttpClient);
  }

  override getResourceUrl(): string {
    return '/asignatura';
  }
}
