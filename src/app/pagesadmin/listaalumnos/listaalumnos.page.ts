import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-listaalumnos',
  templateUrl: './listaalumnos.page.html',
  styleUrls: ['./listaalumnos.page.scss'],
})
export class ListaalumnosPage implements OnInit {
  usuario: any [] =[]

  constructor(public serviciobd: ServiciobdService) {
    
  }

  ngOnInit() {  
    this.serviciobd.dbState().subscribe((res) =>{
      if(res){
        this.serviciobd.fetchalumno().subscribe(Alumno =>{
          this.usuario = Alumno;
        })
      }
    });
  }
  eliminar(item){
    this.serviciobd.deletealumnoad(item.rut);
    this.serviciobd.presentAlert("Alumno Eliminado");
  }

  modificar(item){
    let navigationExtras: NavigationExtras = {
      state: {
        rut: item.rut
      }
    }
    this.serviciobd.router.navigate(['/alteraralumnoaad'], navigationExtras);
  }

  modificar2(item){
    let navigationExtras: NavigationExtras = {
      state: {
        rut: item.rut,
        nombre: item.nombre,
        apellido: item.apellido,
        contrasena: item.contrasena,
        correo: item.correo
      }
    }
    this.serviciobd.router.navigate(['/alterarusuario'], navigationExtras);
  }



}
