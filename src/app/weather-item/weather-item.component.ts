import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { WeatherVO } from '../model/weather-vo';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']

})
export class WeatherItemComponent implements OnInit {

  @Input() weather: WeatherVO;

  constructor() {}

  ngOnInit() {
    // console.log("TCL: WeatherItemComponent -> ngOnInit -> this.weather", this.weather)
  }

}
