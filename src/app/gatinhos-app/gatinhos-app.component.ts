import { GatinhoService } from './../services/gatinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gatinhos-app',
  templateUrl: './gatinhos-app.component.html',
  styleUrls: ['./gatinhos-app.component.scss']
})
export class GatinhosAppComponent implements OnInit {

  constructor(gatinhoService: GatinhoService) { }

  ngOnInit(): void {
  }

}
