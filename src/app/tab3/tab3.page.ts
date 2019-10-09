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
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit, OnDestroy, AfterViewInit {
  weathers: any;
  subscription: any;
  loadingDatas = false;
  backButtonSubscription;
  iframeUrl = 'https://pages.ffgolf.org/resultats/liste-competitions/9fa9379b2460c7c99b3ce48face442d6?';

  constructor(private platform: Platform, public sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ionViewDidEnter() {
    this.loadingDatas = true;

    this.iframeUrl = this.iframeUrl + Date.now();

    setTimeout(() => {
      this.loadingDatas = false;
    }, 1000);


  }
  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();

  }

  ngOnInit(): void {
  }

}
