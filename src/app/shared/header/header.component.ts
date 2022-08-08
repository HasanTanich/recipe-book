import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.loggedIn = this.auth.Authenticated();
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

}
