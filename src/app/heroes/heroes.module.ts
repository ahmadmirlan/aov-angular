import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HeroService} from '../services/hero.service';
import { FormHeroComponent } from './form-hero/form-hero.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RoleService} from '../services/role.service';
import { ShowHeroComponent } from './show-hero/show-hero.component';
import { HeroItemComponent } from './hero/hero-item/hero-item.component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: 'new',
    component: FormHeroComponent
  },
  {
    path: ':heroId',
    component: ShowHeroComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
  ],
  declarations: [HeroComponent, FormHeroComponent, ShowHeroComponent, HeroItemComponent],
  providers: [HeroService, RoleService]
})
export class HeroesModule { }
