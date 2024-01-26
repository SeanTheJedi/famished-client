import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NgbCollapseModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    NavbarComponent
  ],
})
export class ComponentsModule { }
