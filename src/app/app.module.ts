import { NgModule } from '@angular/core';

// Declarations
import { AppComponent } from './app.component';
import { FirstApp } from './first_comp/first.component'

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SecondCompComponent } from './second-comp/second-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstApp,
    SecondCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }