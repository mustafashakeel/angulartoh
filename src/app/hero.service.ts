import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private messageService: MessageService, private http: HttpClient) { }
  getHeroes(): Observable<Hero[]> {

    // const heroes = of(HEROES);
    this.messageService.add("Hero Service : getting Heroes from service");
    // return heroes;
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  private log(message: string) {
    this.messageService.add(`HeroService ${message}`)
  }
  getHero(id: number): Observable<Hero> {

    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
