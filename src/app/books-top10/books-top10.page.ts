import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-books-top10',
  templateUrl: './books-top10.page.html',
  styleUrls: ['./books-top10.page.scss'],
})
export class BooksTop10Page implements OnInit {

  top_books10: any; 
  constructor(private libraryService: LibraryService) { }

  ngOnInit() {

    this.libraryService.getTop10().then(topBooks10 =>{
      this.top_books10 = topBooks10
    })
    
  }

}
