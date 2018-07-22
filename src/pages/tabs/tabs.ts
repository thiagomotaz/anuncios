import { Component } from '@angular/core';
/*
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';*/

import { CompraPage } from '../compra/compra';
import { VendaPage } from '../venda/venda';
import { PerfilPage } from '../perfil/perfil';

import { App } from 'ionic-angular/components/app/app';
import { Platform } from 'ionic-angular';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    //tab1Root = HomePage;
    //tab2Root = AboutPage;
    //tab3Root = ContactPage;
    tab1Root = CompraPage;
    tab2Root = VendaPage;
    tab3Root = PerfilPage;

    constructor(public platform: Platform, app: App){
        this.platform.ready().then(() => {
            this.platform.registerBackButtonAction(() => {
                app.getActiveNav();
            });
        })       
    }
}
