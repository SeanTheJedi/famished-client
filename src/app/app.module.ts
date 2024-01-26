import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CoreModule } from "./core/core.module";
import { ComponentsModule } from "./core/components/components.module";
import { HomePageComponent } from './modules/home-page/home-page.component';
import { MenuPageComponent } from './modules/menu-page/menu-page.component';
import { AboutPageComponent } from './modules/about-page/about-page.component';
import { ContactPageComponent } from './modules/contact-page/contact-page.component';
import { NotFoundPageComponent } from './modules/not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CoreModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
