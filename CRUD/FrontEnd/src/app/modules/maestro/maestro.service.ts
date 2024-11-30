import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../BaseService/base.service';
import { IMaestro } from '../../Interfaces/IMaestro';

@Injectable({
  providedIn: 'root',
})
export class MaestroService extends BaseService<IMaestro> {
  constructor(protected HttpClient: HttpClient) {
    super(HttpClient);
  }

  override getResourceUrl(): string {
    return '/maestro';
  }
}
