import { Component } from '@angular/core';
import { AppNavbar } from '../../components/site-navbar/site-navbar';
import { Footer } from '../../components/footer/footer';

import { About } from '../about/about';
import { Shopping } from '../shopping/shopping';
import { Feedback } from '../feedback/feedback';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [AppNavbar,
    Footer,
    About,
    Shopping,
    Feedback,
    Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
