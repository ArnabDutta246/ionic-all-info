import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.page.html',
  styleUrls: ['./pipes.page.scss'],
})
export class PipesPage implements OnInit {
  priceList:number[] = [10,100,1000,10000,100000,1000000,10000000,]
  constructor() { }

  ngOnInit() {
  }

}
