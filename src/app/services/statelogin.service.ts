import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase';

@Injectable({
  providedIn: 'root'
})
export class StateloginService {
  private isLoggedIn:boolean = false;

  constructor() { }

  async login(u:string, p:string){
    //u y p no esten vacios
    if(u == '' || p == ''){
      return false;
    }
    if(!this.userChecker(u) || !this.passChecker(p)){
      return false;
    }
    return await this.authFirebase(u,p);

  }
  async authFirebase(u:string, p:string){
    try{
      const resultado = await firebase.auth().signInWithEmailAndPassword(u,p);
      if(resultado.user && resultado.user.emailVerified){
        this.saveLocalData(resultado.user.uid,u);
        this.isLoggedInState();
        return true;
      }
    }catch(e){

    }


  }
  isLoggedInState() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  //Guardar en el telefono la sesion
  saveLocalData(uid: string, u: string) {
    localStorage.setItem('uid',JSON.stringify(uid));
    localStorage.setItem('user', JSON.stringify(u));
    localStorage.setItem('level', '1');
  }
  //nppm install firebase@8.10.1
  userChecker(u:string){
    return /[a-zA-Z0-9_-]/.test(u);
  }
  passChecker(p:string){
    if(p.length < 8 || !/[!a-zA-Z0-9]/.test(p)){
      return false;
    }
    return true;
  }
}
