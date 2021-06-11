import { Component, Input, OnInit } from '@angular/core';
import { Vertice } from '../../../model/vertice.interface';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {
  @Input()
  vertices: Vertice[];

  constructor() {}

  ngOnInit() {}
}
