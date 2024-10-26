import { Routes } from '@angular/router';
import {QrGenerateComponent} from './qr-generate/qr-generate.component';
import {HomeComponent} from './home/home.component';
import {QrScanComponent} from './qr-scan/qr-scan.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'qr-generate',
    component: QrGenerateComponent,
  },
  {
    path: 'qr-scan',
    component: QrScanComponent
  }
];
