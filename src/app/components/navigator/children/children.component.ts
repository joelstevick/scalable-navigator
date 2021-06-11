import { Component, Input, OnInit } from '@angular/core';
import { Vertice } from '../../../model/vertice.interface';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  @Input()
  children: Vertice[];

  constructor() {}

  ngOnInit() {}
}
