import { Component, VERSION } from '@angular/core';
import { tree } from './model/model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  root = tree;
}
