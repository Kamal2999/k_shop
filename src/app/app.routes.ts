import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Navbar } from './components/navbar/navbar';

export const routes: Routes = [

    {
        path: '',
        component: Login
    },

    {
        path: 'dashboard',
        component: Dashboard
    },

    {
        path: 'navbar',
        component: Navbar
    }

];