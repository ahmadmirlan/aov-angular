import { Component, OnInit } from '@angular/core';
import {HeroService} from '../../services/hero.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Hero} from '../../model/hero';

@Component({
  selector: 'app-show-hero',
  templateUrl: './show-hero.component.html',
  styleUrls: ['./show-hero.component.css']
})
export class ShowHeroComponent implements OnInit {
  hero: Hero;
  param = this.route.snapshot.params.heroId;
  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.heroService.getHero(this.param).subscribe(
      heroe => {
        if (this.param === 'new') {
          this.hero = {};
        } else {
          this.hero = heroe;
        }
      }
    );
  }

}
