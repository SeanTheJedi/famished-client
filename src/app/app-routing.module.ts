import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./modules/home-page/home-page.component";
import {MenuPageComponent} from "./modules/menu-page/menu-page.component";
import {AboutPageComponent} from "./modules/about-page/about-page.component";
import {ContactPageComponent} from "./modules/contact-page/contact-page.component";
import {NotFoundPageComponent} from "./modules/not-found-page/not-found-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'menu', component: MenuPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact-us', component: ContactPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
