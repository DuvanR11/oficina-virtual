import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { LoginRequest, LoginResponse } from '../../domain/models/auth.model';
import { InteractuarApiService } from '../services/interactuar-api.service';
import { InteractuarRepository } from '../../domain/repositories/interactuar.repository';

@Injectable()
export class InteractuarHttpRepository implements InteractuarRepository {
  constructor(private api: InteractuarApiService) {}

  login(data: LoginRequest): Promise<LoginResponse> {
    return firstValueFrom(this.api.login(data));
  }
}
