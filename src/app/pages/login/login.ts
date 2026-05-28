import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {

  phone: string = '';
  password: string = '';

  message: string = '';
  messageType: string = '';

  constructor(
    private api: Api,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  login(form: NgForm) {

    // VALIDATION
    if (form.invalid) {

      Object.keys(form.controls).forEach(field => {

        form.controls[field].markAsTouched();

      });

      return;

    }

    // RESET MESSAGE
    this.message = '';
    this.messageType = '';

    // API DATA
    const data = {

      phone: this.phone.trim(),
      password: this.password.trim()

    };

    console.log(data);

    // API CALL
    this.api.login(data).subscribe({

      // SUCCESS
      next: (res: any) => {

        console.log(res);

        this.messageType = 'success';

        this.message = 'Login Successful';

        this.cdr.detectChanges();

        // SAVE TOKEN
        localStorage.setItem(
          'token',
          res.access_token
        );

        // SAVE USER
        localStorage.setItem(
          'user',
          JSON.stringify(res.user)
        );

        // REDIRECT
        setTimeout(() => {

          this.router.navigate(['/dashboard']);

        }, 1000);

      },

      // ERROR
      error: (err: any) => {

        console.log('LOGIN ERROR =>', err);

        this.messageType = 'error';

        this.message =
          err?.error?.message ||
          'Invalid Credentials';

        this.cdr.detectChanges();

      }

    });

  }

}
