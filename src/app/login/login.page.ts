import { Component, OnInit } from '@angular/core';
import { SigninService } from '../services/signin.service';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string = '';
  mail: string = '';
  password: string = '';
  passwordCheck: string = '';

  //ionic generate service service/signin
  constructor(
    private signIn: SigninService,
    private redireccionamientoService: RedireccionamientoService
  ) {}
  ngOnInit() {}

  async signin() {
    if ((this.user, this.mail, this.password)) {
      console.log(this.user, this.mail, this.password, this.passwordCheck);
      await this.signIn.registroAuth(this.password, this.user, this.mail);

      this.nav('/login');

    }
  }

  nav(path: string) {
    this.redireccionamientoService.navegar(path);
  }
}
