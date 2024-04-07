import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private DB_URL='https://981a49c17b9f4225a6b3d4955bb5545b.api.mockbin.io/'
  constructor(private http:HttpClient) { }
  GetReviews(){
    return this.http.get(`${this.DB_URL}/Reviews`)
  }
}
