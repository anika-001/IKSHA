import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getUserState() {
    return this.afAuth.authState;
  }

  constructor(private afAuth: AngularFireAuth) { }
}
