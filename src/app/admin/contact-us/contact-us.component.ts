import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactUs } from 'src/app/core/models/contactus.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserMessagesDialogComponent } from './user-messages-dialog/user-messages-dialog.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactComponent implements OnInit {

  isAdmin: boolean; // Logged in or not 
  data; // data fetched from database
  users;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', Validators.required),
  });

  constructor(public dataService: DataService, public authService: AuthService, public dialog: MatDialog, public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.Authenticated();
    if (this.isAdmin) {
      this.data = this.dataService.getData('contact-us');
      this.data.then((e) => {
        this.users = e;
      });
    }
  }

  sendMessage() {
    this.dataService.addData(this.contactForm.value, 'contact-us');
    this.contactForm.reset();
  }

  showMessage(user: ContactUs) {
    this.dialog.open(UserMessagesDialogComponent, {
      data: user,
    });
  }

  deleteMessage(user: ContactUs) {
    this.users = this.users.filter(u => {
      return u !== user;
    });
    this.dataService.deleteData('contact-us', user.id)
  }

  emailErrorMessage() {
    if (this.contactForm.get('email').hasError('required')) {
      return '* Email field is required';
    }
    return this.contactForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

}