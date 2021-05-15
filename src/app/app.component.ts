import { Component, Injectable, VERSION } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['../css/sf.component.css']
})
export class AppComponent {
  name = 'Rolles and Rolls';
  characters = Characters;
}

export interface Character {
  id: number;
  firstname: string;
  lastname: string;
  sexe: Sexe;
  age: number;
  description: String;
  inventory: Item[];
  statistiques: Statistique[];
  hp: number;
  credit: number;
}

export interface Specie {
  id: number;
  name: string;
  description: string;
  image: string;
  bonus: Bonus[];
  hp: number;
}

export interface VenomedSpecie extends Specie {
  venomType: VenomType;
  power: number;
}

export interface Venom {}

export interface VenomType {
  id: number;
  name: string;
  effect: string;
}

export interface Statistique {
  name: StatistiqueNames;
  value: number;
}

export interface Bonus {
  name: StatistiqueNames;
  value: number;
}

enum StatistiqueNames {
  vigor = 'Vigueur',
  dexterity = 'Dexterite',
  intelligence = 'Intelligence',
  perception = 'Perception',
  charisma = 'Charisme'
}

enum Sexe {
  male,
  female,
  unknown
}

export interface Item {
  name: string;
  description: string;
  quantity: number;
}

export interface Weapon extends Item {
  numberOfDice: number;
  valueOfDices: number;
  range: Range;
  bonus: WeaponBonus[];
}

export interface WeaponBonus extends Weapon {
  range: Range;
  brutBonus: number;
  statBonus: StatistiqueNames;
}

export interface WeaponType extends Weapon {
  range: Range;
  brutBonus: number;
  statBonus: StatistiqueNames;
}

export interface Interval {
  min: number;
  max: number;
}

enum Range {
  Close,
  Nearby,
  Far
}

function getIntervalRange(range: Range): Interval {
  switch (range) {
    case Range.Close:
      return { min: 3, max: 5 };
    case Range.Nearby:
      return { min: 5, max: 8 };
    case Range.Far:
      return { min: 8, max: 12 };
  }
}

export const Characters: Character[] = [
  {
    id: 1,
    firstname: 'Jack',
    lastname: 'Oakhearth',
    sexe: Sexe.male,
    age: 27,
    description: 'test description',
    inventory: [],
    statistiques: [
      { name: StatistiqueNames.vigor, value: 22 }, //vigor
      { name: StatistiqueNames.dexterity, value: 14 }, //dexterity
      { name: StatistiqueNames.intelligence, value: 13 }, //intelligence
      { name: StatistiqueNames.perception, value: 14 }, //perception
      { name: StatistiqueNames.charisma, value: 17 } //charisma
    ],
    hp: 42,
    credit: 306
  },
  {
    id: 2,
    firstname: 'Jack',
    lastname: 'Oakhearth',
    sexe: Sexe.female,
    age: 27,
    description: 'test description',
    inventory: [],
    statistiques: [
      { name: StatistiqueNames.vigor, value: 22 }, //vigor
      { name: StatistiqueNames.dexterity, value: 14 }, //dexterity
      { name: StatistiqueNames.intelligence, value: 13 }, //intelligence
      { name: StatistiqueNames.perception, value: 14 }, //perception
      { name: StatistiqueNames.charisma, value: 17 } //charisma
    ],
    hp: 42,
    credit: 306
  }
];

export const Species: Specie[] = [
  {
    id: 1,
    name: 'Raptor',
    description: 'test description',
    image: '',
    bonus: [
      { name: StatistiqueNames.vigor, value: 0 }, //vigor
      { name: StatistiqueNames.dexterity, value: 0 }, //dexterity
      { name: StatistiqueNames.intelligence, value: 0 }, //intelligence
      { name: StatistiqueNames.perception, value: 0 }, //perception
      { name: StatistiqueNames.charisma, value: 0 } //charisma
    ],
    hp: 42
  }
];

@Injectable({ providedIn: 'root' })
export class AppService {
  getCharacter(id: number): Observable<Character> {
    const hero = Characters.find(c => c.id === id) as Character;
    return of(hero);
  }
}
