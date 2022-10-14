import { IGatinhos } from './../interfaces/gatinhos';
import { GatinhoService } from './../services/gatinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gatinhos-app',
  templateUrl: './gatinhos-app.component.html',
  styleUrls: ['./gatinhos-app.component.scss']
})
export class GatinhosAppComponent implements OnInit {
  gatinho!: IGatinhos;

  constructor(private gatinhoService: GatinhoService) { }

  ngOnInit(): void {
    this.pegaGatinho();
    console.log(this.gatinho);

  }

  exibeGatin() {
    console.log('gatin');

  }

  pegaGatinho() {
    this.gatinhoService.getGatinhos()
    .subscribe((gato) => {
      console.log(gato);
      this.mapperGatinho(this.gatinho)
    })
  }

  mapperGatinho(gato: IGatinhos) {
    this.gatinho = gato;
  }

}
