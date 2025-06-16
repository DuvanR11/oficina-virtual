import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '../../domain/models/auth.model';
import { BaseApiService } from './base-api.service'; // Ajusta la ruta según tu estructura
import { HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class InteractuarApiService {
  constructor(private baseApi: BaseApiService) {}

  login(data: LoginRequest): Observable<LoginResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.baseApi.post<LoginResponse>('/auth/login', data, headers);
  }
}
