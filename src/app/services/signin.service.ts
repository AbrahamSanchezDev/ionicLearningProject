import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor() {}

  async registroAuth(p: string, u: string, m: string) {
    try {
      const resultado = await firebase
        .auth()
        .createUserWithEmailAndPassword(m, p);

      if (resultado.user) {
        await resultado.user.updateProfile({
          displayName: u,
        });
        await resultado.user.sendEmailVerification();
      }
    } catch (e) {
      console.log(e);
    }
  }

  checkEmail(m: string) {
    return /^[\w-\.]+@[\w-]+\.+[\w-]{2,4}$/g.test(m);
  }

  passChecker(p1: string, p2: string) {
    if (p1 != p2) {
      return false;
      //returnar mensaje
    }
    if (p1.length < 8 || p1.length > 20) {
      return false;
    }
    return /[a-zA-Z0-9#@!$%_-]/g.test(p1);
  }

  checkUser(u: string) {
    return /[a-zA-Z ]/g.test(u);
  }
}
