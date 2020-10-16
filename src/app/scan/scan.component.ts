import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss'],
})
export class ScanComponent implements OnInit {
  currentDevice: MediaDeviceInfo = null;
  devices: MediaDeviceInfo[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  scanSuccess(barcode: string): void {
    this.router.navigate(['product', barcode]);
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    if (devices.length) {
      this.devices = devices;
      this.currentDevice = devices[0];
    } else {
      this.currentDevice = null;
    }
  }
}
