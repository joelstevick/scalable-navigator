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

  currentVertice: Vertice;

  children: Vertice[];

  path: Vertice[];

  parentOf: any = {};

  id = 1;

  pattern = '';

  constructor() {}

  ngOnInit() {
    // map vertices to parents
    this.root.id = this.id++;

    const self = this;

    traverse(null, this.root, (p, v) => {
      v.id = self.id++;
      self.parentOf[v.id] = p;
    });

    this.clickedVertice(this.root);
  }

  clickedVertice(vertice: Vertice) {
    this.currentVertice = vertice;

    this.updateNewVertice();
  }

  updateNewVertice() {
    this.updatePath();

    this.updateChildren();
  }

  updatePath() {
    const path: Vertice[] = [];

    let parent = this.currentVertice;
    while (parent) {
      path.unshift(parent);

      parent = this.parentOf[parent.id];
    }

    this.path = path;
  }

  updateChildren() {
    const children = [];

    if (this.pattern.trim().length > 0 && this.currentVertice.children) {
      this.currentVertice.children.forEach(child => {
        if (
          child.label.toLowerCase().indexOf(this.pattern.toLowerCase()) >= 0
        ) {
          children.push(child);
        }
      });
    }

    this.children = children;
  }
  search(pattern: string) {
    this.pattern = pattern;

    this.updateChildren();
  }
}
