import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { Vertice } from '../../../model/vertice.interface';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit, OnChanges {
  @Input()
  vertices: Vertice[];

  @Output()
  clicked = new EventEmitter<Vertice>();

  @Output()
  search = new EventEmitter<string>();

  pattern = '';

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.vertices) {
      this.pattern = '';
    }
  }

  ngOnInit() {}

  onSearch() {
    this.search.emit(this.pattern);
  }
}
