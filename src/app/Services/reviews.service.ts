import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private DB_URL='https://jsonkeeper.com/b/YG2G'
  constructor(private http:HttpClient) { }
  GetReviews(){
    return this.http.get(`${this.DB_URL}/Reviews`)
  }
}
