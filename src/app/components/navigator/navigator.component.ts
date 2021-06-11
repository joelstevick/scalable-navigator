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

  constructor() {}

  ngOnInit() {}
}
