import { Component, Input, OnInit } from '@angular/core';
import { Vertice } from '../../model/vertice.interface';
import * as _ from 'lodash';

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

  parentOf: any = {};

  constructor() {}

  ngOnInit() {
    this.updateNewVertice(this.root);
  }

  clickedVertice(vertice: Vertice) {
    this.updateNewVertice(vertice);
  }

  updateNewVertice(vertice: Vertice) {
    this.children = vertice.children || [];

    this.updatePath(vertice);
  }

  updatePath(vertice: Vertice) {
    this.path = [vertice];
  }
}
