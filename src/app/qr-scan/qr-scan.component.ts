import { Component } from '@angular/core';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {BarcodeFormat} from '@zxing/browser';
import {scan} from 'rxjs';

@Component({
  selector: 'app-qr-scan',
  standalone: true,
  imports: [
    ZXingScannerModule
  ],
  templateUrl: './qr-scan.component.html',
  styleUrl: './qr-scan.component.scss'
})
export class QrScanComponent {

  scannedId: string | null = null;

  allowedFormats = [BarcodeFormat.QR_CODE];

  onScanSuccess(result: string): void {
    this.scannedId = result;
    console.log('result is: ', result)
  }

  protected readonly scan = scan;
}
