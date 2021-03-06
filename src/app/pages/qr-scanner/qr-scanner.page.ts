import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
export interface ScanReturnData{
  cancelled: boolean;
  format:string;
  text:string;
}
@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage implements OnInit {
  data:ScanReturnData = null;
  constructor(
    private barcodeScanner: BarcodeScanner
    ) { }

  ngOnInit() {
  }


  scan() {
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
