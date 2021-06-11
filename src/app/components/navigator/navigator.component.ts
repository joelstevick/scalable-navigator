import { Component, Input, OnInit } from '@angular/core';
import { Vertice } from '../../model/vertice.interface';

function traverse(parent: Vertice, vertice: Vertice, handler: (p, v) => void) {
  handler(parent, vertice);

  if (vertice.children && vertice.children.length > 0) {
    vertice.children.forEach(c => {
      traverse(vertice, c, handler);
    });
  }
}

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

  id = 1;

  constructor() {}

  ngOnInit() {
    // map vertices to parents
    traverse(null, this.root, (p, v) => {
      v.id = this.id++;
      this.parentOf[v.id] = p;
    });

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
    const path: Vertice[] = [vertice];

    while (this.parentOf[vertice.id]) {
      path.unshift(this.path[vertice.id]);
    }

    this.path = path;

    console.log(path);
  }
}
