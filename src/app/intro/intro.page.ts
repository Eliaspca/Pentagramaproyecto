import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      title: "Los mejores instrumentos",
      desc: "Pentagrama",
      subtitle: "",
      img: "../assets/img/books.png"
    },
    {
      title: "Libros para niños",
      desc: "Los mejores libros para niños de 5 - 8 años",
      subtitle: "",
      img: "../assets/img/books2.png"
    },
    {
      title: "Ciencia Ficcion",
      desc: null,
      subtitle: "",
      img: ""
    }
,
    {
      title: "Ciencia Ficcion",
      desc: null,
      subtitle: "",
      img: ""
    }
  ]

  constructor(private router: Router, private storage: Storage) { 
  }

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/menu/home");
  }
  ngOnInit() {
  }

}
