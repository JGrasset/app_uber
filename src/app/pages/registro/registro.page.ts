import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  alumno: any =
  [{
    rut: '',
    nombre: '',
    apellido: '',
    contrasena: '',
    correo: ''
  }]

  constructor(private serviciobd:ServiciobdService,private router:Router, private menu: MenuController) {
    this.menu.enable(false);
   }
  ngOnInit() {

  }
  guardar(){
    this.serviciobd.addAlumno(this.alumno.rut,this.alumno.nombre,this.alumno.apellido,this.alumno.contrasena,this.alumno.correo);
  }

  
}
