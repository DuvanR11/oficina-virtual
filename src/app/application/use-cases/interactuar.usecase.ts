import { LoginRequest, LoginResponse } from '../../domain/models/auth.model';
import { InteractuarHttpRepository } from '../../infrastructure/repositories/interactuar-http.repository';

export class InteractuarUseCase {
  constructor(private authRepo: InteractuarHttpRepository) {}

  login(data: LoginRequest): Promise<LoginResponse> {
    return this.authRepo.login(data);
  }
}
