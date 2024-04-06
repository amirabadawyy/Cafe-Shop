import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private router:Router){}
  sendMessage(){
    alert('Your message have been sent succesfully')
    this.router.navigateByUrl('contact')
  }
}
