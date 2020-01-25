import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";


@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private hero_service: HeroService) { }

  ngOnInit(
  ) {
    this.get_heroes();
  }

  get_heroes(): void {
    this.hero_service.get_heroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.hero_service.add_hero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.hero_service.delete_hero(hero).subscribe();
  }
}
