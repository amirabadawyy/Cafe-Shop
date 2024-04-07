import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  private DB_URL =  "https://cafeshop-data.onrender.com/"
  getAllUsers(){
    return this.http.get(this.DB_URL);
  }
}
