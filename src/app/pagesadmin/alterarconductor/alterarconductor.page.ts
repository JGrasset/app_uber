import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-alterarconductor',
  templateUrl: './alterarconductor.page.html',
  styleUrls: ['./alterarconductor.page.scss'],
})
export class AlterarconductorPage implements OnInit {
rutuser:null;
admin: any =
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

  alterconductor(){
    this.serviciobd.createadmin(this.admin.llave, this.admin.contrasena);
    this.serviciobd.deleteconductor(this.rutuser);
    this.serviciobd.presentAlert("Usuario Modificado");
    this.router.navigate(['/listaconductores']);
  }
}
