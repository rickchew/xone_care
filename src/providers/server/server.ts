import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServerProvider Provider');
  }

  getQrCode(url : string){
    return this.http.get(url);
  }

}
