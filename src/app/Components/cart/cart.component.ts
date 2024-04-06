import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../Services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HttpClientModule],
  providers: [NotificationService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  CartItems: any=[];
  totalPrice: number=0;
  constructor(private notificServ:NotificationService,private router:Router) { }
  ngOnInit(): void {
    let currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if(Object.keys(currentUser).length===0){
      alert('Please login first');
      this.router.navigateByUrl('/login')
    }
    else if(currentUser.isAdmin){
      alert('You are admin you do not have cart');
      this.router.navigateByUrl('/')
    }
    else{
      //new
      this.CartItems = JSON.parse(localStorage.getItem('cart') || "[]")
      if(this.CartItems.length===0){
        alert("Your  cart is empty , please add any product to display it")
        this.router.navigate(['/shop'])
      }
    }
  }
  decQuant(cartItem: any) {
    if (cartItem.quantity > 0) {
        cartItem.quantity--;
    }

  }
  incQuant(cartItem: any) {
    if (cartItem.quantity >= 0) {
        cartItem.quantity++;
    }
  }
  removeCartItem(cartItem:any) {
    this.CartItems = this.CartItems.filter((item: any) => item.id !== cartItem.id)
    localStorage.setItem("cart", JSON.stringify(this.CartItems))
    // alert(`${cartItem.title}  Removed From Your Card`);
    this.notificServ.showSuccess(`${cartItem.title}  Removed From Your Card`);
  }

  
  calcTotalPrice(items: any[]){
      let sum = 0;
      items.forEach((item: any)=>{
          sum += item.price * item.quantity;
      })
      return sum;
  }
}

