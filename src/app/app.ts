import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { AppNavbar } from './components/site-navbar/site-navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AppNavbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}