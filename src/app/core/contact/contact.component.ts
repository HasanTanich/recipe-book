import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isAdmin: boolean;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', Validators.required)
  });

  constructor(public dataService: DataService, public authService: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.Authenticated();
  }

  sendMessage() {
    console.log(this.contactForm.value);
    this.dataService.addData(this.contactForm.value);
  }

}
