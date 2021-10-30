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
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
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
    this.pipeExampleOne();
  }
  // pipe operator
  // this operator use to chain multiple operator
  pipeExampleOne(){
    of(1,2,3,4,5,6).pipe(
      filter(a=>a%2==0),
      map(a=>a*10)
    ).subscribe(res=>{
      console.log("pipeExampleOne",res);
    })
  }
  // tap operator
  // switchMap
  // map
  // take
  // margeMap 


















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
