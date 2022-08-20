import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
// import { DataSource } from '@angular/cdk/collections';
// import { BehaviorSubject, Observable } from 'rxjs';
import { ContactUs } from '../models/ContactUs.model';
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'message'];
  dataSource: MatTableDataSource<ContactUs>;

  isAdmin: boolean; // Logged in or not 
  data; // data fetched from database

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', Validators.required)
  });

  constructor(public dataService: DataService, public authService: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.Authenticated();
    if (this.isAdmin) {
      this.data = this.dataService.getData('contact-us');
      this.data.then((e) => {
        this.dataSource = new MatTableDataSource<ContactUs>(e);
        this.data = this.dataSource.connect();
      });
    }
  }

  sendMessage() {
    this.dataService.addData(this.contactForm.value, 'contact-us');
  }

}