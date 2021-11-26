import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-camaraconductor',
  templateUrl: './camaraconductor.page.html',
  styleUrls: ['./camaraconductor.page.scss'],
})
export class CamaraconductorPage implements OnInit {



  image: any;
  scannedCode = null; 
  elementType: 'url' | 'canvas' | 'img' = 'canvas';

  constructor(private camera: Camera, private barcodeScanner: BarcodeScanner, private galeria: Base64ToGallery, private toastController: ToastController) { }

  ngOnInit() {
    
  }

  takePicture(){
    const options: CameraOptions={
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.camera.getPicture(options)
    .then((imageData) => {
       this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }
  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })
  }
}
