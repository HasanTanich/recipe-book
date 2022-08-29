import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactUs } from '../../models/contactus.model';

@Component({
  selector: 'app-user-messages-dialog',
  templateUrl: './user-messages-dialog.component.html',
  styleUrls: ['./user-messages-dialog.component.scss']
})
export class UserMessagesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ContactUs) { }

  ngOnInit(): void {

  }

}
