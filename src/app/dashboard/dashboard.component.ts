import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heores: Hero[] = [];

  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heores = heroes.slice(1, 5));
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
