import { Routes } from '@angular/router';
import {SampleComponent} from './sample/sample.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sample',
    component: SampleComponent,
  }
];
