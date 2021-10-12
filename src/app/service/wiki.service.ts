import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

 private subject = new Subject<any>();

  sendClick(){
    this.subject.next();
    
  }

  getClick(){
     return this.subject.asObservable();
  }

  constructor() { }
}
