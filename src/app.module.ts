import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterDetailComponent } from './character/character.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, CharacterDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
