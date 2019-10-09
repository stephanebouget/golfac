import {
    NgModule,
    Directive,
    OnInit,
    EventEmitter,
    Output,
    OnDestroy,
    Input,
    ElementRef,
    Renderer
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';


import {
    WeatherItemComponent
} from './weather-item/weather-item.component';
import {
    SanitizeHtmlPipe
} from './sanitize-html.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CurrentWeatherItemComponent } from './current-weather-item/current-weather-item.component';

@NgModule({
    imports: [
        FlexLayoutModule,
        CommonModule
    ],
    declarations: [
        CurrentWeatherItemComponent,
        WeatherItemComponent,
        SanitizeHtmlPipe
    ],
    exports: [
        CurrentWeatherItemComponent,
        WeatherItemComponent,
        SanitizeHtmlPipe,
        FlexLayoutModule,
        CommonModule
    ]
})

export class SharedModule {}