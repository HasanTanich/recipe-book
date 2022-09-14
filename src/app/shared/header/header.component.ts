import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;
  recipes;
  constructor(public auth: AuthService, public dataService: DataService) { }

  ngOnInit(): void {
    this.loggedIn = this.auth.Authenticated();
    this.recipes = this.dataService.getData('recipes');
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

}
