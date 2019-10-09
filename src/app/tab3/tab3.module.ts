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
  Tab3Page
} from './tab3.page';
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
      component: Tab3Page
    }])
  ],
  declarations: [Tab3Page
  ]
})
export class Tab3PageModule {}
