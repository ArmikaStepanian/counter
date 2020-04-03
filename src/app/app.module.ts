import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './views/categories/categories.component';
import { ExercisesComponent } from './views/exercises/exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ExercisesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
