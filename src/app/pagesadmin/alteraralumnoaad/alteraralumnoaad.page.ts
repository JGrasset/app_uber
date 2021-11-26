import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-alteraralumnoaad',
  templateUrl: './alteraralumnoaad.page.html',
  styleUrls: ['./alteraralumnoaad.page.scss'],
})
export class AlteraralumnoaadPage implements OnInit {
  conductor: any =
  [{
    rut: null,
    nombre: null,
    apellido: null,
    destino: null,
    valor: null,
    imagen:null
  }]
  rutuser: null;
  constructor( private serviciobd:ServiciobdService, private activeroute:ActivatedRoute, private router:Router, private camera: Camera) {
    this.activeroute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.rutuser = this.router.getCurrentNavigation().extras.state.rut;        
      }
    })
   }
  ngOnInit() {
  }

  alterarconductor(){
    this.serviciobd.addConductor(this.conductor.rut, this.conductor.nombre, this.conductor.apellido, this.conductor.destino, this.conductor.valor, this.conductor.imagen);
    this.serviciobd.deletealumnoad(this.rutuser);
    this.serviciobd.presentAlert("Alumno Alterado");
    this.router.navigate(['/listaalumnos']);
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
       this.conductor.imagen = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }
  insertconductor(){
    this.serviciobd.addConductor(this.conductor.rut, this.conductor.nombre, this.conductor.apellido, this.conductor.destino, this.conductor.valor, this.conductor.imagen);
    this.serviciobd.presentAlert("Alumno Alterado");
    this.router.navigate(['/listaalumnos']);
  }
}
