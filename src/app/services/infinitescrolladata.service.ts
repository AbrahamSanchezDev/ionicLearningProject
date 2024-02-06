import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'firebase';

@Injectable({
  providedIn: 'root',
})
export class InfinitescrolladataService {
  constructor() {}

  uploadData(data: {}, tel: any) {
    if (!data) {
      return false;
    }
    try {
      const dataRef = firebase.database().ref('/datos/mensajes');
      if (tel == '') {
        const nuevaId = dataRef.push().key;

        tel = nuevaId;
      }

      dataRef.child(tel).set(data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }

    return true;
  }

  items: any[] = [];
  //datos->mensajes->tel->{nombre,hora, numeroMensajes, numDes}
  requestData() {
    this.items = [];

    try {
      const databaseRef = firebase.database().ref('/datos/mensajes');
      databaseRef.once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const datos = childSnapshot.val();
          const numero = childSnapshot.key;
          this.items.push({ datos: datos, numero: numero });
        });
        return this.items;
      });
    } catch (e) {
      console.log(e);
      return this.items;
    }
    return this.items;
  }
}
