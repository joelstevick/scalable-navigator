import { Component, Input, OnInit } from '@angular/core';
import { Vertice } from '../../model/vertice.interface';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  @Input()
  root: Vertice;

  children: Vertice[];

  path: Vertice[];

  constructor() {}

  ngOnInit() {
    this.updateNewVertice(this.root);
  }

  clickedVertice(vertice: Vertice) {
    this.updateNewVertice(vertice);
  }

  updateNewVertice(vertice: Vertice) {
    this.children = vertice.children || [];
    this.path = [vertice];
  }
}
