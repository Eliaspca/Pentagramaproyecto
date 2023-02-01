import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';


@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.page.html',
  styleUrls: ['./books-modal.page.scss'],
})
export class BooksModalPage implements OnInit {

  books: any;
  author: any;

  constructor( 
    private navParams: NavParams,
    private libraryAuthor: LibraryService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.libraryAuthor.getBooksAuthor(this.author.id).then(books => {
      this.books = books;
    })
  }

  ionViewDidEnter() {
    this.author = this.navParams.get("author");
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
