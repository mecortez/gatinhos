import { IGatinhos } from './../interfaces/gatinhos';
import { GatinhoService } from './../services/gatinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gatinhos-app',
  templateUrl: './gatinhos-app.component.html',
  styleUrls: ['./gatinhos-app.component.scss']
})
export class GatinhosAppComponent implements OnInit {
  gatinho!: IGatinhos[];
  modal = false;

  constructor(private gatinhoService: GatinhoService) { }

  ngOnInit(): void {
    this.pegaGatinho();
    this.gatoPerdido();
  }

  exibeGatin() {
    this.modal = !this.modal;
    console.log(this.gatinho);

  }

  pegaGatinho() {
    this.gatinhoService.getGatinhos()
    .subscribe((gato) => {
      this.gatinho = gato;
      this.mapperGatinho(this.gatinho)
      console.log(this.gatinho);
    })
  }

  mapperGatinho(gato: IGatinhos[]) {
    return this.gatinho = gato;
  }

  gatoPerdido() {
    // for (let i = 0; i < this.gatinho.length; i++) {
    //   const element = this.gatinho[i];
    //   console.log(element);


    // }
  }

}
