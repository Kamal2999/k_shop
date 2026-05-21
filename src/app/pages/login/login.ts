import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  user_id: any = '';
  password: any = '';
  constructor(private api: Api) { }
  login() {
    let data = {
      user_id: this.user_id,
      password: this.password
    };

    this.api.login(data).subscribe((res: any) => {

      console.log(res);
      alert(res.message);

    });
  }

}