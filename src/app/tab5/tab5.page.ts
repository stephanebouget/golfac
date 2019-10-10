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
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
})
export class Tab5Page implements OnInit, OnDestroy, AfterViewInit {
  weathers: any;
  subscription: any;
  loadingDatas = false;
  backButtonSubscription;
  iframeUrl = 'https://www.meteociel.fr/cartes_obs/radar/lastradar_no.gif?';

  constructor(private platform: Platform, public sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  ngOnInit(): void {}

  ionViewDidEnter() {
    this.loadingDatas = true;

    this.iframeUrl = this.iframeUrl + Date.now();
    console.log("TCL: Tab4Page -> ionViewDidEnter -> this.iframeUrl", this.iframeUrl)

    setTimeout(() => {
      this.loadingDatas = false;
    }, 1000);

  }

}
