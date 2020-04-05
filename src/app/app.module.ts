import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoriesComponent} from './views/categories/categories.component';
import {ExercisesComponent} from './views/exercises/exercises.component';
import {HttpClientModule} from '@angular/common/http';
import {AddButtonComponent} from './views/add-button/add-button.component';
import {DialogComponent} from './views/dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ExercisesComponent,
    AddButtonComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    ExercisesComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
