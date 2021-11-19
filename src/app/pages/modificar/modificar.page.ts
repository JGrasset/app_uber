import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/services/alumno';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  user: Alumno = {
    rut: '',
    nombre: '',
    apellido: '',
    contrasena: '',
    correo:'',
  };
  constructor(private serviciobd: ServiciobdService) { }

  ngOnInit() {
  }
  editar(){
    this.serviciobd.updatealumno( this.user.rut,this.user.nombre,this.user.apellido, this.user.contrasena,this.user.correo);
  }

}
