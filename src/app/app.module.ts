import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FighterCreateComponent } from './components/fighter-create/fighter-create.component';
import { FighterListComponent } from './components/fighter-list/fighter-list.component';
import { FighterEditComponent } from './components/fighter-edit/fighter-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';


@NgModule({
  declarations: [
    AppComponent,
    FighterCreateComponent,
    FighterListComponent,
    FighterEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
