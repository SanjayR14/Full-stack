import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
  
})
export class ContactComponent {
  submitForm() {
    alert('Thank you for reaching out! We will get back to you soon.');
  }
  
}
