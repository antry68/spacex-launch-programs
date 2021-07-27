import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//imports
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LaunchitemcontainerComponent } from './launchitemcontainer/launchitemcontainer.component';
import { FilterareaComponent } from './filterarea/filterarea.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchitemcontainerComponent,
    FilterareaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
