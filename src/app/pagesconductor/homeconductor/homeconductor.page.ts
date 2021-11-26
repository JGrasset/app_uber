import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-homeconductor',
  templateUrl: './homeconductor.page.html',
  styleUrls: ['./homeconductor.page.scss'],
})
export class HomeconductorPage implements OnInit {
  scannedCode = null;
  constructor(private camera: Camera, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  ModificarC(){

  }

  registrarviaje(){

  }


  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })
  }

}
