import { LoginRequest, LoginResponse } from '../models/auth.model';

export interface InteractuarRepository {
  login(data: LoginRequest): Promise<LoginResponse>;
}
