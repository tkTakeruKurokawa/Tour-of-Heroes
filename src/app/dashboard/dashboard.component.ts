import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private hero_service: HeroService) { }

  ngOnInit() {
    this.get_heroes();
  }

  get_heroes(): void {
    this.hero_service.get_heroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
