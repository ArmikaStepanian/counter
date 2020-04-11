import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoriesComponent} from './views/categories/categories.component';
import {ExercisesComponent} from './views/exercises/exercises.component';
import {HttpClientModule} from '@angular/common/http';
import {AddButtonComponent} from './views/add-exercise/add-button.component';
import {DialogComponent} from './views/add-exercise/add-exercise-dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DatepickerComponent} from './views/add-exercise/add-exercise-dialog/add-exercise-datepicker/datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {StatComponent} from './views/statistic/stat.component';
import {StatDialogComponent} from './views/statistic/stat-dialog/stat-dialog.component';
import {StatDatepickerComponent} from './views/statistic/stat-dialog/stat-datepicker/stat-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ExercisesComponent,
    AddButtonComponent,
    DialogComponent,
    DatepickerComponent,
    StatComponent,
    StatDialogComponent,
    StatDatepickerComponent
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
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
