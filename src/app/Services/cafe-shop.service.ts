import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CafeShopService {
  private DB_URL='https://api.myjson.online/v1/records/f79434d2-e380-42b0-ba25-8613c072166a'
  constructor(private http:HttpClient) { }
  GetAllProducts(){
    return this.http.get(`${this.DB_URL}/products`);
  }
  GetProductByID(id:any){
  return this.http.get(`${this.DB_URL}/products/${id}`)
  }
  GetCategory(){
    return this.http.get(`${this.DB_URL}/category`)
  }
  AddProduct(product:any){
    return this.http.post(`${this.DB_URL}/products`,product);
  }
  updateProduct(id:any,product:any){

    return this.http.put(`${this.DB_URL}/products/${id}`, product)
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.DB_URL}/products/${id}`)
  }

}
