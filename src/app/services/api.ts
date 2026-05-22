import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Api {

  constructor(private http: HttpClient) {}

  login(data:any){

    return this.http.post(

      'https://property.mail-go.site/api/login',
      data,
      {
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json'
        }
      }
    );

  }

}