import { Component, Input, OnInit } from '@angular/core';
import { Vertice } from '../../../model/vertice.interface';

@Component({
  selector: 'app-vertice',
  templateUrl: './vertice.component.html',
  styleUrls: ['./vertice.component.css']
})
export class VerticeComponent implements OnInit {
  @Input()
  vertice: Vertice;

  constructor() {}

  ngOnInit() {}
}
