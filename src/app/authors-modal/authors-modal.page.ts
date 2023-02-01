import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-authors-modal',
  templateUrl: './authors-modal.page.html',
  styleUrls: ['./authors-modal.page.scss'],
})
export class AuthorsModalPage implements OnInit {

  authors_id: any;
  constructor(private navParams: NavParams,private modalController: ModalController) { }

  ngOnInit() {
    this.authors_id = this.navParams.get("authors");
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
