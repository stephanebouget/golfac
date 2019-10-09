import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule
} from '@angular/forms';
import {
  IonicModule
} from '@ionic/angular';
import {
  RouterModule
} from '@angular/router';

import {
  // MatTableModule,
  MatProgressSpinnerModule
  // MatTabsModule,
  // MatSnackBarModule,
  // MatSortModule,
  // MatToolbarModule,
  // MatButtonModule,
  // MatTooltipModule,
  // MatFormFieldModule,
  // MatSelectModule,
  // MatMenuModule,
  // MatSidenavModule,
  // MatCheckboxModule,
  // MatInputModule,
  // MatIconModule,
  // MatPaginatorModule,
  // MatSliderModule,
  // MatButtonToggleModule,
  // MatDialogModule
} from '@angular/material';
import {
  Tab1Page
} from './tab1.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: Tab1Page
    }])
  ],
  declarations: [Tab1Page
  ]
})
export class Tab1PageModule {}
