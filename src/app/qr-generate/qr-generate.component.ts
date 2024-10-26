import {Component} from '@angular/core';
import {QRCodeModule} from 'angularx-qrcode';

@Component({
  selector: 'qr-generate',
  standalone: true,
  templateUrl: './qr-generate.component.html',
  styleUrl: './qr-generate.component.scss',
  imports: [
    QRCodeModule
  ]
})
export class QrGenerateComponent {}
