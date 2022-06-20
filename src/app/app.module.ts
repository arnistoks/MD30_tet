import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { Page404Component } from './pages/page404/page404.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { CharacterComponent } from './pages/character/character.component';
import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    LocationsComponent,
    Page404Component,
    HeaderComponent,
    CharacterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
