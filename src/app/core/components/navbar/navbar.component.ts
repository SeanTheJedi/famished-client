import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']

})
export class NavbarComponent {

  isMenuCollapsed = true;
  activeRoute = 1

  constructor(public route: ActivatedRoute) {
    console.log(this.route.snapshot.url)
  }

  ngOnInit(): void {

  }

}
