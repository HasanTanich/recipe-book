import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public auth: Auth, private router: Router) {
  }

  Login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((response: any) => {
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/']);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  getCurrentUser() {
    let user = JSON.parse(localStorage.getItem('user'));
    // let u = {
    //   token: user.stsTokenManager.refreshToken,
    //   email: user.email,
    //   uid: user.uid,
    //   expiration: user.stsTokenManager.expirationTime
    // };
    return user;
  }

  Authenticated() {
    return (this.getCurrentUser() ? true : false);
  }

}