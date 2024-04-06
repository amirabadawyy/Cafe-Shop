import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../Services/reviews.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [HttpClientModule,RouterModule],
  providers:[ReviewsService],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {
  constructor(private revServ:ReviewsService){}
  Reviews:any=[]
  ngOnInit(): void {
   this.GetAllReviews()
  }
  GetAllReviews(){
    this.revServ.GetReviews().subscribe({
      next:(data)=>{
this.Reviews=data
      }   
     })


  }

}
