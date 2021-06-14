import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { PathComponent } from './components/navigator/path/path.component';
import { ChildrenComponent } from './components/navigator/children/children.component';
import { VerticeComponent } from './components/navigator/vertice/vertice.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavigatorComponent,
    PathComponent,
    ChildrenComponent,
    VerticeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
