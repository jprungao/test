import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from 'src/components/navigation/navigation.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { StageComponent } from 'src/components/stage/stage.component';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
