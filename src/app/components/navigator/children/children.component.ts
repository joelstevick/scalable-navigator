import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vertice } from '../../../model/vertice.interface';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  @Input()
  children: Vertice[];

  @Output()
  clicked = new EventEmitter<Vertice>();

  constructor() {}

  ngOnInit() {}
}
