import { Observable } from 'rxjs';
import { IGatinhos } from './../interfaces/gatinhos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GatinhoService {

  constructor(private http:HttpClient) { }

  getGatinhos(): Observable<IGatinhos> {
    return this.http.get<IGatinhos>(`${environment.API_URL}`);
  }

}
