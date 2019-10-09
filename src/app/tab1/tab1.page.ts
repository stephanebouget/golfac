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
  selector: 'app-home',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy, AfterViewInit {
  weathers: any;
  subscription: any;
  loadingDatas = false;
  backButtonSubscription;

  constructor(private weatherService: WeatherService, private platform: Platform) {}

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });

  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();

  }

  ngOnInit(): void {

    // let str;
    // for (let i = 0; i <= 100; i++) {
    //   if (i < 10) {
    //     str += 'https://www.lameteoagricole.net/images_meteo/0' + i + '.png\r\n';
    //   } else {
    //     str += 'https://www.lameteoagricole.net/images_meteo/' + i + '.png\r\n';
    //   }
    // }
    // console.log("TCL: Tab1Page -> constructor -> str", str)

    this.loadingDatas = true;

    this.weatherService.getWeather().then((datas: any) => {
      this.weathers = datas.weathers;
      setTimeout(() => {
        this.loadingDatas = false;
      }, 100);
    });
  }

}
