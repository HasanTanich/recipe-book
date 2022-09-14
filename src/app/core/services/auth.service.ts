import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(public auth: Auth, private router: Router, public notificationService: NotificationService) {
  }

  Login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((response: any) => {
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.notificationService.openSnackBar(err.message);
      });
  }

  getCurrentUser() {
    let user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  Authenticated() {
    return (this.getCurrentUser() ? true : false);
  }

}