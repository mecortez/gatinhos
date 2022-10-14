import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatinhoService {
  private url = 'https://api.thecatapi.com/v1/images/search/';

  constructor() { console.log(this.url);
  }
}
