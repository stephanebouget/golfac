import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import {
  WeatherService
} from '../services/weather.service';

import {
  Platform,
} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy, AfterViewInit {

  weathers: any;
  subscription: any;
  loadingDatas = false;
  backButtonSubscription;

  constructor(private weatherService: WeatherService, private platform: Platform) {
  }


  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });

  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();

  }


  ionViewDidEnter(): void {

    this.loadingDatas = true;

    this.weatherService.getWeatherDay().then((datas: any) => {
      this.weathers = datas.weathers;
      setTimeout(() => {
        this.loadingDatas = false;
      }, 100);
    });
  }

  ngOnInit(): void {

  }

}
