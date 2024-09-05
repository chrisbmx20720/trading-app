import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.css']
})
export class IndicesComponent implements AfterViewInit {

  indices = [
    { name: 'Bitcoin', value: '45000', change: 2.5 },
    { name: 'Ethereum', value: '3000', change: -1.2 },
    { name: 'Gold', value: '1800', change: 0.7 },
    { name: 'Binance', value: '400', change: 1.8 },
    { name: 'S&P 500', value: '4200', change: 0.3 },
    { name: 'NASDAQ', value: '13000', change: 1.1 },
    { name: 'Dow Jones', value: '34000', change: 0.2 },
    { name: 'Nikkei 225', value: '29000', change: -0.5 },
    { name: 'FTSE 100', value: '7000', change: 0.4 },
    { name: 'DAX', value: '15500', change: -0.8 },
    { name: 'CAC 40', value: '6500', change: 0.6 },
    { name: 'Shanghai Composite', value: '3600', change: 0.9 },
    { name: 'Hang Seng', value: '25000', change: -0.7 },
    { name: 'Russell 2000', value: '2100', change: 1.0 },
    { name: 'Crude Oil', value: '75', change: 1.4 },
    { name: 'Natural Gas', value: '4', change: -2.3 }
  ];
  
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 6,
      spaceBetween: 25,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
          centeredSlides: true,
        },
        950: {
          slidesPerView: 6
          ,
        },
      }
    });
  }
}
