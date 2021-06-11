import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vertice } from '../../../model/vertice.interface';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {
  @Input()
  vertices: Vertice[];

  @Output()
  clicked = new EventEmitter<Vertice>();

  constructor() {}

  ngOnInit() {}
}
