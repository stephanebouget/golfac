import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit
} from '@angular/core';

import {
  DomSanitizer
} from '@angular/platform-browser';

import {
  Platform,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss'],
})
export class Tab6Page implements OnInit, OnDestroy, AfterViewInit {
  weathers: any;
  subscription: any;
  loadingDatas = false;
  backButtonSubscription;
  iframeUrl = 'https://delphinecoiffure.000webhostapp.com/gac.php?';


  
  constructor(private platform: Platform, public sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });

  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  ionViewDidEnter() {
    this.loadingDatas = true;

    this.iframeUrl = this.iframeUrl + Date.now();
    console.log("TCL: Tab6Page -> ionViewDidEnter -> this.iframeUrl", this.iframeUrl)

    setTimeout(() => {
      this.loadingDatas = false;
    }, 1000);

  }

  ngOnInit(): void {

  }

}
