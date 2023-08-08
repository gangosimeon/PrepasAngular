import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { PremierComponentComponent } from './premier-component/premier-component.component';
import { AppareilsComponent } from './appareils/appareils.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponentComponent,
    AppareilsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
