import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
/*
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';*/
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CompraPageModule } from '../pages/compra/compra.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { VendaPageModule } from '../pages/venda/venda.module';
import { IntroPageModule } from '../pages/intro/intro.module';

import firebase from 'firebase';
import { LoginPageModule } from '../pages/login/login.module';

firebase.initializeApp({
  apiKey: "AIzaSyDZgt6C35JdSgeVWVi4_VJa0ZiIaV606SA",
  authDomain: "facebooklogin-80b9d.firebaseapp.com",
  databaseURL: "https://facebooklogin-80b9d.firebaseio.com",
  projectId: "facebooklogin-80b9d",
  storageBucket: "facebooklogin-80b9d.appspot.com",
  messagingSenderId: "844784608568"
});

@NgModule({
  declarations: [
    MyApp,
    /*
    AboutPage,
    ContactPage,
    HomePage,*/
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CompraPageModule,
    PerfilPageModule,
    VendaPageModule,
    IntroPageModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,/*
    AboutPage,
    ContactPage,
    HomePage,*/
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
