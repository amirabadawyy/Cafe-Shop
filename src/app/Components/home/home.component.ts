
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CafeShopService } from '../../Services/cafe-shop.service';
import { Product } from '../../Models/Product';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [   HttpClientModule,
     RouterOutlet,RouterModule],
     providers:[CafeShopService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
   constructor(private shopServ:CafeShopService,private router:Router){}
   Added:any
   Products:any=[]
   Cart:any=[]
   ngOnInit(): void {
      this.GetAll()
   }
   onEdit() { 
    window.scrollTo(0, 0); 
    }
    GetAll(){
      this.shopServ.GetAllProducts().subscribe({
         next:(data)=>{
            this.Products=data
         }
      })
    }
    addToCart(product: any): void { 
      this.Cart = JSON.parse(localStorage.getItem('cart') || "[]");
      if (this.Cart.length !== 0) {
        let foundedProd = this.Cart.find((e:any) => e.id === product.id) 
        if (foundedProd) {
          foundedProd.quantity++;
          alert(`${product.title} Already In The Card 
              Quantity Updated ${foundedProd.quantity}`)
        } else {

          alert(`${product.title}  Added To Your Card`);
          this.Cart.push({...product, quantity : 1});
        }
      } else {
        alert(`${product.title}  Added To Your Card`);
    
        this.Cart.push({...product, quantity : 1 });
      }
      localStorage.setItem('cart', JSON.stringify(this.Cart));
      this.router.navigate(['/cart'])
   }
   }
