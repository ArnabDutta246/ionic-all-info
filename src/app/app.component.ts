import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  counter:number = 0;
  public appPages = [
    { title: 'renderer', url: '/renderer', icon: 'mail' },
    { title: 'element-ref', url: '/element-ref', icon: 'paper-plane' },
    { title: 'location', url: '/location', icon: 'heart' },
    { title: 'Pipes', url: '/pipes', icon: 'archive' },
    { title: 'Google-chart', url: '/googlechart', icon: 'archive' },
     { title: 'QRScanner', url: '/qr-scanner', icon: 'warning' },
     { title: 'UI One', url: '/ui-one', icon: 'warning' },
     { title: 'Swiper', url: '/swiperjs', icon: 'warning' },
     { title: 'Rxjs', url: '/rxjs', icon: 'warning' },
  ];
   // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private alertController:AlertController,
    private platform:Platform,
    private router:Router,
    private location:Location,
  ) {

    // hardware back button controll
    this.hardwareBackButtonControl()
    //this.pipeExampleOne();
  }

  // hardware back button
  hardwareBackButtonControl(){
    this.platform.backButton.subscribe(() => {
      console.log("subscribe! ", this.router.url);
    if (this.router.url == "/home" || this.router.url == "/user-login" ||    this.router.url == "/device-registration" || this.router.url ==     "/device-   registration-otp" || this.router.url == "/user-messages") {
    this.counter = this.counter + 1;   // Attempt 2 to confu=irm
    // this.messageService.showErrorToast("Press back button again to exit."); // toaster for attemp
    if (this.counter % 2 == 0) {
        navigator['app'].exitApp();
       }
    }
   else {
    this.location.back();
     }
  })
  this.platform.backButton.subscribeWithPriority(0, () => {
    console.log("subscribeWithPriority! ", this.router.url);
  });
  }

  
}
