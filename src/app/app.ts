import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { AppNavbar } from './components/site-navbar/site-navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AppNavbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}