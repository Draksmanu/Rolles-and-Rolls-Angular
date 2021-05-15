import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Character } from './app.component';

import { AppComponent } from './app.component';

@Component({
  selector: 'my-app',
  templateUrl: './character.component.html',
  styleUrls: ['./sf.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: Character;

  constructor(
    private route: ActivatedRoute,
    private appService: AppComponent,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.appService
      .getCharacter(id)
      .subscribe(character => (this.character = character));
  }

  goBack(): void {
    this.location.back();
  }
}
