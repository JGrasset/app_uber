import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-alterarusuario',
  templateUrl: './alterarusuario.page.html',
  styleUrls: ['./alterarusuario.page.scss'],
})
export class AlterarusuarioPage implements OnInit {
  rutuser:null;
  alumno: any =
  [{
    llave: null,
    contrasena: null
  }]
  constructor( private serviciobd:ServiciobdService, private activeroute:ActivatedRoute, private router:Router) {
    this.activeroute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.rutuser = this.router.getCurrentNavigation().extras.state.rut;        
      }
    })
   }
  ngOnInit(){
    
  }
  alterusuario(){
    this.serviciobd.createadmin(this.alumno.llave, this.alumno.contrasena);
    this.serviciobd.deletealumnoad(this.rutuser);
    this.serviciobd.presentAlert("Usuario Modificado");
    this.router.navigate(['/listaconductores']);
  }
  createadmin(){
    this.serviciobd.createadmin(this.alumno.llave, this.alumno.contrasena);
    this.serviciobd.presentAlert("Usuario Modificado");
    this.router.navigate(['/listaconductores']);
  }

}
