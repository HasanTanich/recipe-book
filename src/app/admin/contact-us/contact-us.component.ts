import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactUs } from 'src/app/core/models/ContactUs.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';
import { ConfirmPromptComponent } from 'src/app/shared/confirm-prompt/confirm-prompt.component';
import { UserMessagesDialogComponent } from './user-messages-dialog/user-messages-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactComponent implements OnInit {
  isAdmin: boolean; // Logged in or not
  data; // data fetched from database
  users;
  selectedUser;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', Validators.required),
  });

  constructor(
    public dataService: DataService,
    public authService: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.Authenticated();
    // fetch data if user is admin
    if (this.isAdmin) {
      this.data = this.dataService.getData('contact-us');
      this.data.then((message) => {
        this.users = message;
      });
    }
  }

  sendMessage() {
    this.dataService.addData(this.contactForm.value, 'contact-us');
    this.contactForm.reset();
  }

  showMessage(user: ContactUs) {
    this.selectedUser = user;
    this.dialog.open(UserMessagesDialogComponent, {
      data: user,
    });
  }

  deleteMessage() {
    let dialogRef = this.dialog.open(ConfirmPromptComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.users = this.users.filter((u) => {
          return u !== this.selectedUser;
        });
        this.dataService.deleteData('contact-us', this.selectedUser.id);
      }
    });
  }

  emailErrorMessage() {
    if (this.contactForm.get('email').hasError('required')) {
      return '* Email field is required';
    }
    return this.contactForm.get('email').hasError('email')
      ? 'Not a valid email'
      : '';
  }
}
