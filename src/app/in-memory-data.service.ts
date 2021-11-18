import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 1, name: 'Batman' },
      { id: 2, name: 'Superman' },
      { id: 3, name: 'Spiderman' },
      { id: 4, name: 'Flash' },
      { id: 6, name: 'Aquaman' },
    ];
    return { heroes };

  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
