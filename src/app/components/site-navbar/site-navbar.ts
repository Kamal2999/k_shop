import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-navbar',
  imports: [RouterLink],
  templateUrl: './site-navbar.html',
  styleUrls: ['./site-navbar.css'],
  standalone: true
})
export class AppNavbar {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}