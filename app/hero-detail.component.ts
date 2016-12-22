import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
   selector: 'my-hero-detail',
   template: `
    <div *ngIf="hero">
      <h2>{{hero.first_name}} {{hero.last_name}} details! </h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.first_name" placeholder="first name"/>
        <input [(ngModel)]="hero.last_name" placeholder="last name"/>
      </div>
    </div>
   `
 })
 export class HeroDetailComponent{
   @Input()
   hero: Hero;
 }
