import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Alumno } from 'src/app/services/alumno';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  usuario: Alumno = {
    rut: '',
    nombre: '',
    apellido: '',
    contrasena: '',
    correo:'',
  };

  constructor(public serviciobd: ServiciobdService, private menu: MenuController) {
    this.menu.enable(true);
  }


  ngOnInit() {
    this.serviciobd.fetchalumno().subscribe((alumno) => {
      if (alumno.length > 0) {
        this.usuario = {
          apellido: alumno[0]['apellido'],
          contrasena: alumno[0]['contrasena'],
          nombre: alumno[0]['nombre'],
          rut: alumno[0]['rut'],
          correo: alumno[0]['correo']
        };
      }
    });
  }
}
