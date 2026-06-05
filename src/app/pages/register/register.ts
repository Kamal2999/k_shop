import { Component } from '@angular/core';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';

import {
  FormsModule,
  NgForm
} from '@angular/forms';

import {
  Router,
  RouterLink
} from '@angular/router';

@Component({
  selector: 'app-register',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],

  templateUrl: './register.html',

  styleUrls: ['./register.css']
})

export class Register {

  name: string = '';

  email: string = '';

  phone: string = '';

  password: string = '';

  confirmPassword: string = '';

  // ALERTS
  message: string = '';

  messageType: string = '';

  constructor(
    private api: Api,
    private router: Router
  ) { }

  // REGISTER FUNCTION
  register(form: NgForm) {

    this.message = '';
    this.messageType = '';

    if (form.invalid) {

      Object.keys(form.controls).forEach(field => {
        form.controls[field].markAsTouched();
      });

      return;
    }

    if (this.password !== this.confirmPassword) {

      this.messageType = 'error';
      this.message = 'Passwords do not match';

      return;
    }

    const data = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password
    };

    console.log(data);

    this.api.register(data).subscribe({

      next: (res: any) => {

        console.log(res);

        if (res.status) {

          this.messageType = 'success';

          this.message =
            res.message ||
            'Register Successful Please Login And Enjoy Shopping';

          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1500);

        } else {

          this.messageType = 'error';

          this.message =
            res.message || 'Registration Failed';
        }
      },

      error: (err: any) => {

        console.log(err);

        this.messageType = 'error';

        this.message =
          err?.error?.message ||
          'Registration Failed';
      }

    });

  }

}
