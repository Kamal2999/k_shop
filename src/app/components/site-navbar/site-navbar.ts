import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-navbar',
  imports: [RouterLink],
  templateUrl: './site-navbar.html',
  styleUrl: './site-navbar.css',
  standalone:true
})
export class AppNavbar {}
