import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetroactionService {

  messages:String[] = new Array();

  constructor() { }
  
  ajout(msg:String)
  {
    this.messages.push(msg);
  }

  vider()
  {
    this.messages = [];
  }
}
