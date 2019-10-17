import {
  Component
} from '@angular/core';
import {
  DomSanitizer
} from '@angular/platform-browser';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  iframeUrl: string;
  loadingGif = true;
  randGif: number;

  constructor(public sanitizer: DomSanitizer) {

    this.randGif = Math.floor(Math.random() * 6) + 1;
    // this.randGif = 4;
    this.iframeUrl = '../../assets/gif/' + this.randGif + '.gif';

    setTimeout(() => {
      this.loadingGif = false;
    }, 2500);

  }
  tabChanged(e) {
    console.log("TCL: TabsPage -> tabChanged -> e", e)

  }

}
