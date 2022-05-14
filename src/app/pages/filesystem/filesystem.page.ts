import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-filesystem',
  templateUrl: './filesystem.page.html',
  styleUrls: ['./filesystem.page.scss'],
})
export class FilesystemPage implements OnInit,OnDestroy {

  /** 
   * Need to install
   * plugins
   * ====================
   * npm install @capacitor/filesystem
   * npm install capacitor-blob-writer
   * npm i @ionic-native/core
   * npm i cordova-plugin-preview-any-file
   *    
   * add platform
   * ==============
   * npx cap add android
   * */ 

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(){}
}
