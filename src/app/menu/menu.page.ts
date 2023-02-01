import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController,
      private navCtrl: NavController,
      private logout: AuthenticateService
    ) { }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
  }

  CerrarSesion(){
    this.logout.CerrarSesion();  
    this.navCtrl.navigateRoot("/login"); 
  }

  goToAuthors(){
    this.navCtrl.navigateRoot("/menu/authors");
    this.menu.close();
  }

  goToHome(){
    this.navCtrl.navigateRoot("/menu/home");
    this.menu.close();
  }

  goToBooks(){
    this.navCtrl.navigateRoot("/menu/books");
    this.menu.close();
  }

  goToMyFavorites(){
    this.navCtrl.navigateRoot("/menu/favorite-books");
    this.menu.close();
  }

  goTop10(){
    this.navCtrl.navigateRoot("/menu/books-top10");
    this.menu.close();
  }
  

}
