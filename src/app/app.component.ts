import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { Location } from '@angular/common';
import { PluginListenerHandle } from '@capacitor/core';
import { Network } from '@capacitor/network';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  counter: number = 0;
  networkStatus: any;
  networkListener: PluginListenerHandle;

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
    { title: 'filesystem', url: '/filesystem', icon: 'archive' },
    { title: 'Cart POC', url: '/cart', icon: 'archive' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Trave   l', 'Reminders'];
  constructor(
    private alertController: AlertController,
    private platform: Platform,
    private router: Router,
    private location: Location,
  ) {

    // hardware back button controll
    //ths.pipeExamplieOne();
  }

  // onInit
  ngOnInit() {
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      this.networkStatus = status;
      console.log('Network status changed', status);
    });
    // network status
    this.getNetWorkStatus();
  }
  async getNetWorkStatus() {
    this.networkStatus = await Network.getStatus();
    console.log(this.networkStatus);
  }

  endNetworkListener() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }

  ngOnDestroy() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }


  // hardware back button
  hardwareBackButtonControl() {
    this.platform.backButton.subscribe(() => {
      console.log("subscribe! ", this.router.url);
      if (this.router.url == "/home" || this.router.url == "/user-login" || this.router.url == "/device-registration" || this.router.url == "/device-   registration-otp" || this.router.url == "/user-messages") {
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

  // 
}
