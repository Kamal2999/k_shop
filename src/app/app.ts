import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { AppNavbar } from './components/site-navbar/site-navbar';
import { Footer } from './components/footer/footer';
import { About } from './pages/about/about';
import { Shopping } from './pages/shopping/shopping';
import { Feedback } from './pages/feedback/feedback';
import { Contact } from "./pages/contact/contact";
import { NgIf } from '@angular/common';
// import { MainLayout } from "./layouts/main-layout/main-layout";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar, Footer, About, Shopping, Feedback, Contact,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(public router: Router) { }
}
