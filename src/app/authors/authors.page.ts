import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { ModalController } from '@ionic/angular';
import { AuthorsModalPage } from '../authors-modal/authors-modal.page';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {

  authors: any;

  constructor(private libraryService: LibraryService,private modalController: ModalController) { }

  ngOnInit() {
    this.libraryService.getAuthors().then( res => {
      this.authors = res;
      console.log(this.authors)
    })
  }

  async VerInformacionAutor(author_id: any){
    const modal = await this.modalController.create({
      component: AuthorsModalPage,
      componentProps: {
        authors: author_id
      }
    });
    return await modal.present();

}

}