import { IGatinhos } from './../interfaces/gatinhos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GatinhoService {
  // public url = 'https://api.thecatapi.com/v1/images/search/';

  constructor(private http:HttpClient) { }

  getGatinhos() {
    return this.http.get<IGatinhos[]>(`${environment.API_URL}`);
  }

}
