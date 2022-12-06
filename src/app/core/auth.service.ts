import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = '';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  autenticate(userName: string, password: string){
    
  }
}
