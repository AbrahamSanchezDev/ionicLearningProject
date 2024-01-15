import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-loginstate',
  templateUrl: './loginstate.component.html',
  styleUrls: ['./loginstate.component.scss'],
})
export class LoginstateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  async loginVerification(user: string, pass: string) {
    try {
      if (user == '' || pass == '') {
        return 'Hay algun campo vacio';
      }
      if (!this.userCheker(user) && !this.passChacker(pass)) {
        return 'Usuario o password no validos';
      }
    } catch (error) {
      return 'Error inesperado! intentelo mas tarde';
    }

    await this.confirmLogin(user, pass);

    return 'Login Success';
  }

  async confirmLogin(user: string, pass: string) {
    return 'Login';
  }

  passChacker(pass: string) {
    return true;
  }

  userCheker(user: string) {
    return true;
  }
}
