import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public urlAPI = 'https://www.lameteoagricole.net/meteo-ajax-5days.php?';
  // public urlAPI = 'https://www.lameteoagricole.net/meteo-ajax-heure-par-heure.php?';

  constructor() { }
}
