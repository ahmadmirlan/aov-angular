import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Hero} from '../../model/hero';
import {Roles} from '../../model/roles';
import {RoleService} from '../../services/role.service';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-form-hero',
  templateUrl: './form-hero.component.html',
  styleUrls: ['./form-hero.component.css']
})
export class FormHeroComponent implements OnInit {
  regularForm: FormGroup;
  roles: Roles[] = [];
  constructor(private fb: FormBuilder,
              private roleService: RoleService,
              private heroService: HeroService) { }

  ngOnInit() {
    this.roleService.getRoles().subscribe(
      response => this.roles = response['_embedded']['roleses']
    );
    this.initForm({} as Hero);
  }

  initForm(hero: Hero) {
    this.regularForm = this.fb.group({
        'heroName': [hero.heroName, Validators.required],
        'tagline': [hero.tagline, Validators.required],
        'skill': [hero.skill, Validators.required],
        'cover': [hero.cover, Validators.required],
        'roles': [hero.roles, Validators.required]
      }
    );
  }

  onFormSubmited() {
    const dataHero: Hero = {};
    dataHero.heroName = this.regularForm.value.heroName;
    dataHero.tagline = this.regularForm.value.tagline;
    dataHero.skill = this.regularForm.value.skill;
    dataHero.cover = this.regularForm.value.cover;
    dataHero.roles = [this.regularForm.value.roles['_links']['self']['href']];
    this.heroService.createHero(dataHero).subscribe(
      response => console.log(response)
    );
  }
}
