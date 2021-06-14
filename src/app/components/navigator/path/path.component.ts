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
import { FormBuilder, FormGroup } from '@angular/forms';
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

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.vertices && this.form) {
      this.form.controls['pattern'].setValue('');
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      pattern: ['']
    });

    this.form.valueChanges.subscribe(values => {
      this.onSearch(values.pattern);
    });
  }

  onSearch(pattern: string) {
    this.search.emit(pattern);
  }
}
