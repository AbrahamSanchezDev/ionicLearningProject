import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDF9Qh0kYRwJ8gvNX8POKCgUe44_Cldoko',
  authDomain: 'abrahamsf-16ad5.firebaseapp.com',
  projectId: 'abrahamsf-16ad5',
  storageBucket: 'abrahamsf-16ad5.appspot.com',
  messagingSenderId: '382472143986',
  appId: '1:382472143986:web:6915cb14db784233e56eeb',
};

firebase.initializeApp(firebaseConfig);

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
