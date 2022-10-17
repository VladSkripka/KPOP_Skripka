import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Comp } from './app.task1-component';
import { Task10Comp } from './app.task10-component';
import { Task2Comp } from './app.task2-component';
import { Task3Comp } from './app.task3-component';
import { Task4Comp } from './app.task4-component';
import { Task5Comp } from './app.task5-component';
import { Task6_9Comp } from './app.task6-9-component';
import { Task7Comp } from './app.task7-component';
import { Task8Comp } from './app.task8-component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Comp,
    Task2Comp,
    Task3Comp,
    Task4Comp,
    Task5Comp,
    Task6_9Comp,
    Task7Comp,
    Task8Comp,
    Task10Comp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
