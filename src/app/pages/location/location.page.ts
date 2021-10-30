import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  constructor(
    private location:Location
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  goForward() {
    this.location.forward();
  }
 
  getPath() {
    return this.location.path();  
  }

  getState(){
    return this.location.getState();
  }

  getGoHome(){
    // go(path,query,state) state object,path & query string
    // this.location.go('/folder/Inbox',"",{from:"/location"});
  }


  /**
   * All router 
   * ===================
   */
}
