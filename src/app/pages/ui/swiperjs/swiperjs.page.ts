import { Component, OnInit } from '@angular/core';
import Swiper, { Pagination, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-swiperjs',
  templateUrl: './swiperjs.page.html',
  styleUrls: ['./swiperjs.page.scss'],
})
export class SwiperjsPage implements OnInit {
  public swiperConfig:SwiperOptions = {
    slidesPerView: 2, // how much item will show in single time
    spaceBetween: 50, // space between them
    mousewheel: true, // navigation are allowed
    scrollbar: { draggable: true }, // can scroll able
    pagination:{clickable:true},  // bottom pagination indicator are allowed
  };
  constructor() { }

  ngOnInit() {
  // init swiper 
   Swiper.use([Pagination]);
  }



  //======= Reference 
  // https://swiperjs.com/angular
  // Documentation are available in this page
}
