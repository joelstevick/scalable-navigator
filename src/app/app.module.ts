import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { PathComponent } from './components/navigator/path/path.component';
import { ChildrenComponent } from './components/navigator/children/children.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavigatorComponent,
    PathComponent,
    ChildrenComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
