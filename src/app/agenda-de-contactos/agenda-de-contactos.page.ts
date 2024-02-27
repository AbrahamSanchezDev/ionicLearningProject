import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/database';

interface contacto {
  nombre: string;
  apellidoP: string;
  apellidoM: string;
  phone: string;
}
@Component({
  selector: 'app-agenda-de-contactos',
  templateUrl: './agenda-de-contactos.page.html',
  styleUrls: ['./agenda-de-contactos.page.scss'],
})
export class AgendaDeContactosPage implements OnInit {
  nombre: string = '';
  apellidoP: string = '';
  apellidoM: string = '';
  phone: string = '';

  data: contacto[] = [];
  constructor() {}

  ngOnInit() {
    this.loadFromFirebase();
    // const theData: contacto = {
    //   nombre: 'this.nombre',
    //   apellidoP: 'this.apellidoP',
    //   apellidoM: ' AA ',
    //   phone: '10000',
    // };
    // this.data.push(theData);
  }

  guardarDatos() {
    if(this.nombre == "" || this.phone == ""){
      console.log("Nombre y telefono son requeridos");
      return;
    }
    console.log('guardar Datos');
    const theData: contacto = {
      nombre: this.nombre,
      apellidoP: this.apellidoP,
      apellidoM: this.apellidoM,
      phone: this.phone,
    };
    this.data.push(theData);
    this.saveToFirebase();
  }

  deleteDatoAt(index: any) {
    this.data = this.data.filter((obj, i) => i !== index);
    this.saveToFirebase();
  }

  saveToFirebase() {
    const database = firebase.database();
    const referencia = database.ref('contactos');

    // Genera un nuevo identificador único para el array de datos
    const nuevoElemento = referencia.push();

    // Guarda el array completo como un solo elemento en la base de datos
    nuevoElemento
      .set({
        contactos: this.data,
      })
      .then(() => {
        console.log('Datos guardados correctamente en Firebase');
      })
      .catch((error) => {
        console.error('Error al guardar datos en Firebase:', error);
      });
  }

  loadFromFirebase() {
    const database = firebase.database();
    const referencia = database.ref('contactos');

    // Escuchar cambios en la referencia
    referencia.on(
      'value',
      (snapshot) => {
        // Reinicia el array antes de cargar los datos
        this.data = [];

        // Itera sobre los datos y agrega cada elemento al array
        snapshot.forEach((childSnapshot) => {
          const elemento = childSnapshot.val();
          this.data = elemento.contactos;
        });

        // Ahora 'this.datos' contiene el array cargado desde Firebase
        console.log('Datos cargados correctamente desde Firebase:', this.data);
      },
      (error) => {
        console.error('Error al cargar datos desde Firebase:', error);
      }
    );
  }
}
