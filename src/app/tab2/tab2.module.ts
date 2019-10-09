import {
  IonicModule
} from '@ionic/angular';
import {
  RouterModule
} from '@angular/router';
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
  Tab2Page
} from './tab2.page';

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
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: Tab2Page
    }])
  ],
  declarations: [Tab2Page
  ]
})
export class Tab2PageModule {}
