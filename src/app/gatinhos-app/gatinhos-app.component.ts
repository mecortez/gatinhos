import { IGatinhos } from './../interfaces/gatinhos';
import { GatinhoService } from './../services/gatinho.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gatinhos-app',
  templateUrl: './gatinhos-app.component.html',
  styleUrls: ['./gatinhos-app.component.scss']
})
export class GatinhosAppComponent implements OnInit {
  gatinho$!: Observable<any>;
  gato!: IGatinhos;
  modal = false;
  url!: string;

  constructor(private gatinhoService: GatinhoService) { }

  ngOnInit(): void {
    this.gatinho$ = this.gatinhoService.getGatinhos();
  }

  exibeGatin() {
    this.modal = !this.modal;
  }

}
