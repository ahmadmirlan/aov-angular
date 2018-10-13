import { Component, OnInit } from '@angular/core';
import {Hero} from '../../model/hero';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(
      response => this.heroes = response['_embedded']['heroeses']
    );
  }

}
