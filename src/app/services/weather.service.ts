import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  ConfigService
} from './config.service';
import {
  DayVO
} from '../model/day-vo';
import {
  WeatherVO
} from '../model/weather-vo';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient, private config: ConfigService) {}

  getWeather() {
    const url = this.config.urlAPI + 'communeStore=Pleumeur-Bodou%20(22560)&heure&commune=Pleumeur-Bodou+(22560)';

    let params;

    const headers = new HttpHeaders();

    headers.set('Accept', 'application/json, text/javascript, */*; q=0.01');
    headers.set('Origin', 'null');
    // headers.set('User-Agent', 'null');
    headers.set('Content-Type', '[{"key":"Content-Type","value":"application/json; charset=utf-8","enabled":true}]');


    return new Promise((resolve, reject) => {
      this.http.post(url, JSON.stringify(params), {
        headers
      }).subscribe((datas: any) => {
        console.log("TCL: WeatherService -> getWeather -> datas", datas)

        if (datas) {
          const day = new DayVO(datas.jourJ, datas.alerte, datas.maj);
          const weathers = [];

          for (let i = 0; i < datas.jour.length - 2; i++) {

            const weather = new WeatherVO(
              datas.jour[i],
              datas.heure[i],
              datas.dirvent[i],
              datas.humid[i],
              datas.icon[i],
              datas.neb[i],
              datas.prob[i],
              datas.quant[i],
              datas.speed[i],
              datas.temp[i],
              datas.rafales[i]
            );
            weathers.push(weather);
          }

          const res = {
            day,
            weathers
          };

          resolve(res);
        }

      }, (error) => {
        reject();
      });
    });
  }


  getWeatherDay() {
    const url = this.config.urlAPI + 'communeStore=Pleumeur-Bodou%20(22560)&commune=Pleumeur-Bodou+(22560)';

    let params;

    const headers = new HttpHeaders();

    headers.set('Accept', 'application/json, text/javascript, */*; q=0.01');
    headers.set('Origin', 'null');
    // headers.set('User-Agent', 'null');
    headers.set('Content-Type', '[{"key":"Content-Type","value":"application/json; charset=utf-8","enabled":true}]');


    return new Promise((resolve, reject) => {
      this.http.post(url, JSON.stringify(params), {
        headers
      }).subscribe((datas: any) => {
        console.log("TCL: WeatherService -> getWeather -> datas", datas)

        if (datas) {
          const day = new DayVO(datas.jourJ, datas.alerte, datas.maj);
          const weathers = [];

          for (let i = 1; i <= 7; i++) {

            const weather = new WeatherVO(
              '<div>' + datas['dateJ' + i] + '</div>',
              '',
              '<div>' + datas['dir' + i] + '</div>',
              '<div>' + datas['hum' + i] + '</div>',
              '<div>' + datas['icon' + i] + '</div>',
              datas['neb' + i],
              '<div>' + datas['prob' + i] + '</div>',
              datas['quan' + i],
              '<div>' + datas['vit' + i] + '</div>',
              '<div>' + datas['tmin' + i] + '<br>' + datas['tmax' + i] + '</div>',
              '<div>' + datas['vitMax' + i] + '</div>'
            );
            weathers.push(weather);
          }

          const res = {
            day,
            weathers
          };

          resolve(res);
        }

      }, (error) => {
        reject();
      });
    });
  }
}
