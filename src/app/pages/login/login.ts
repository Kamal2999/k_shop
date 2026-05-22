import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Api } from '../../services/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  phone: string = '';
  password: string = '';

  message: string = '';
  messageType: string = '';

  constructor(
    private api: Api,
    private router: Router
  ) { }

  login() {

    console.log(this.phone);
    console.log(this.password);

    let data = {

      phone: this.phone,
      password: this.password

    };

    console.log(data);

    this.api.login(data).subscribe({

      next: (res: any) => {

        console.log(res);

        this.message =
          'Login Successful';

        this.messageType =
          'success';

        localStorage.setItem(
          'token',
          res.access_token
        );

        localStorage.setItem(
          'user',
          JSON.stringify(res.user)
        );

        setTimeout(() => {

          this.router.navigate(
            ['/dashboard']
          );

        }, 1000);

      },

      error: (err) => {

        console.log(err);

        this.messageType = 'error';

        if (err.error?.message?.phone) {

          this.message =
            err.error.message.phone[0];

        }

        else if (err.error?.message?.password) {

          this.message =
            err.error.message.password[0];

        }

        else if (err.error?.message) {

          this.message =
            err.error.message;

        }

        else {

          this.message =
            'Server Error';

        }

      }

    });

  }

}