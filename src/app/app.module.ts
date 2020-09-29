import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BanniereComponent } from './banniere/banniere.component';
import { SelectionComponent } from './selection/selection.component';
import { ContactGestionComponent } from './contact-gestion/contact-gestion.component';
import { RetroactionComponent } from './retroaction/retroaction.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BanniereComponent,
    SelectionComponent,
    ContactGestionComponent,
    RetroactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
