import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private DB_URL='http://localhost:3000'
  constructor(private http:HttpClient) { }
  GetReviews(){
    return this.http.get(`${this.DB_URL}/Reviews`)
  }
}