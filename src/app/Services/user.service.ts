import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  private DB_URL =  "https://981a49c17b9f4225a6b3d4955bb5545b.api.mockbin.io/"
  getAllUsers(){
    return this.http.get(this.DB_URL);
  }
}
