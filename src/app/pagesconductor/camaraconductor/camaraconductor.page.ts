import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-camaraconductor',
  templateUrl: './camaraconductor.page.html',
  styleUrls: ['./camaraconductor.page.scss'],
})
export class CamaraconductorPage implements OnInit {
  image: any;

  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  takePicture(){
    const options: CameraOptions={
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    this.camera.getPicture(options)
    .then((imageData) => {
       this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }
}
