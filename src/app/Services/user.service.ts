import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  private DB_URL =  "https://api.myjson.online/v1/records/f79434d2-e380-42b0-ba25-8613c072166a"
  getAllUsers(){
    return this.http.get(this.DB_URL);
  }
}
