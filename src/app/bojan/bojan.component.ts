import { Component, OnInit } from '@angular/core';
import { AnaService } from '../ana.service';

@Component({
  selector: 'app-bojan',
  templateUrl: './bojan.component.html',
  styleUrls: ['./bojan.component.scss'],
})
export class BojanComponent implements OnInit {
  constructor(private anaSer: AnaService) {}

  ngOnInit(): void {}

  onSer() {
    this.anaSer.ana.next();
  }
}
