import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', Validators.required)
  });

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    console.log(this.contactForm.value);
    this.dataService.addData(this.contactForm.value);
  }

}
