import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  private url = environment.apiUrl;
  private apiUrlParams = environment.apiUrlParams;
  constructor(private readonly http: HttpClient) {}

  get<T>(path: string, headersa:HttpHeaders) {
    return this.http.get<T>(`${this.url}${path}`, { headers: headersa?.append('x-functions-key', environment.apiUrlParams) } );
  }

  post<T>(path: string, data: any, headersa:HttpHeaders) {
    const headers = new HttpHeaders();
    return this.http.post<T>(`${this.url}${path}`, JSON.stringify(data).toString() , { headers: headersa?.append('x-functions-key', environment.apiUrlParams) });
  }

  put<T>(path: string, data: any) {
    return this.http.put<T>(`${this.url}${path}${this.apiUrlParams}`, data);
  }

  delete<T>(path: string,) {
    return this.http.delete<T>(`${this.url}${path}${this.apiUrlParams}`);
  }

}
