import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { XraysComponent } from './Components/xrays/xrays.component';
import { SymptomsComponent } from './Components/symptoms/symptoms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    XraysComponent,
    SymptomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
