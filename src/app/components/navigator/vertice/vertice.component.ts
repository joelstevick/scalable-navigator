import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vertice } from '../../../model/vertice.interface';

@Component({
  selector: 'app-vertice',
  templateUrl: './vertice.component.html',
  styleUrls: ['./vertice.component.css']
})
export class VerticeComponent implements OnInit {
  @Input()
  vertice: Vertice;

  @Output()
  clicked = new EventEmitter<Vertice>();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.clicked.emit(this.vertice);
  }
}
