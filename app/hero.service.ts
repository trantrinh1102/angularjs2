import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  constructor(public http: Http) {}

  getHeroes(): Promise<Hero[]> {
    return this.http.get('http://localhost:3001/heroes.json')
               .toPromise()
               .then(response => response.json() as Hero[]);
  }

  getHero(id: number) {
    return this.http.get('http://localhost:3001/heroes/' + id + '.json')
               .toPromise()
               .then(response => response.json() as Hero);
  }
}
