import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnaService {

  ana = new Subject();
  ana$ = this.ana.asObservable();
  constructor() { }
}
