import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit
} from '@angular/core';

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

  constructor(private platform: Platform) {}

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadingDatas = true;
    setTimeout(() => {
      this.loadingDatas = false;
    }, 1000);
  }

}
