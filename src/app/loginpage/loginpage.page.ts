import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginstateComponent } from '../components/loginstate/loginstate.component';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  passView:boolean = false;
  user: string = '';
  pass: string = '';

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private lsc: LoginstateComponent
  ) {}

  ngOnInit() {
    this.login();
  }

  async login() {
    const result = await this.lsc.loginVerification(this.user,this.pass);
    if(result){
        //redireccionar a inicio
    }
    else{
      //mandar mensaje de error!
    }
  }

  async mostrarMensaje(titulo: string, msj: string) {
    const alerta = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['Cerrar'],
      // buttons: [
      //   'Cerrar'
      //   ,
      //   {
      //     text: 'OK',
      //     role: 'Cerrar',
      //     handler: ()=>{

      //     }
      //   },
      // ],
    });
    await alerta.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  mostrarValores() {
    console.log(this.user);
    console.log(this.pass);

    this.presentToast('top', this.user + ' ' + this.pass);
  }
}
