import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Navbar } from './components/navbar/navbar';
import { Register } from './pages/register/register';

import { Home } from './pages/home/home';

export const routes: Routes = [

    {
        path: '',
        component: Home
    },

    {
        path: 'login',
        component: Login
    },

    {
        path: 'dashboard',
        component: Dashboard
    },

    {
        path: 'navbar',
        component: Navbar
    },

    {
        path: 'register',
        component: Register
    }

];

