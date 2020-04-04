import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './views/categories/categories.component';
import { ExercisesComponent } from './views/exercises/exercises.component';
import { HttpClientModule } from '@angular/common/http';
import { AddButtonComponent } from './views/add-button/add-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ExercisesComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
