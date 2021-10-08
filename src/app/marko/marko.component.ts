import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { AnaService } from '../ana.service';

@Component({
  selector: 'app-marko',
  templateUrl: './marko.component.html',
  styleUrls: ['./marko.component.scss'],
})
export class MarkoComponent implements OnInit, OnDestroy {
  sub: Subscription = new Subscription();
  ana: unknown;
  constructor(private anaSer: AnaService) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.anaSer.ana$.subscribe((ser) => {
      console.log(ser);
      this.ana = ser;
    });
  }
}
