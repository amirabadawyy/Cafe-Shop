import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent implements OnInit{
  constructor(private router:Router){}
  FavProducts:any=[];
    ngOnInit(): void {
      let currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
      if(Object.keys(currentUser).length===0){
        alert('Please login first');
        this.router.navigateByUrl('/login')
      }
      else if(currentUser.isAdmin){
        alert('You are admin you do not have favourites');
        this.router.navigateByUrl('/')
      }else{
        this.FavProducts =  JSON.parse(localStorage.getItem( "Favourite" )||"[]");
      }
    
    }
  
  }