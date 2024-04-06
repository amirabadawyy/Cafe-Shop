import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private DB_URL='https://api.myjson.online/v1/records/f79434d2-e380-42b0-ba25-8613c072166a'
  constructor(private http:HttpClient) { }
  GetReviews(){
    return this.http.get(`${this.DB_URL}/Reviews`)
  }
}
