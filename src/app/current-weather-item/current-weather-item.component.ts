import { Component, OnInit, Input } from '@angular/core';
import { WeatherVO } from '../model/weather-vo';

@Component({
  selector: 'app-current-weather-item',
  templateUrl: './current-weather-item.component.html',
  styleUrls: ['./current-weather-item.component.scss'],
})
export class CurrentWeatherItemComponent implements OnInit {

  @Input() weather: WeatherVO;

  constructor() { }

  ngOnInit() {}

}
