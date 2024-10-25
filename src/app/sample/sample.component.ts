import {Component} from '@angular/core';
import {QRCodeModule} from 'angularx-qrcode';

@Component({
  selector: 'sample',
  standalone: true,
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss',
  imports: [
    QRCodeModule
  ]
})
export class SampleComponent {}
