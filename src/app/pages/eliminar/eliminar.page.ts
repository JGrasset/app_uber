import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  user: any ={
    contrasena: null
  }

  constructor(private serviciobd: ServiciobdService, private menu: MenuController) {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.serviciobd.servicebdState().subscribe((res) =>{
      if(res){
        this.serviciobd.fetchregistro().subscribe(item => {
          this.user = item;
        })
      }
    });
  }
  eliminar(){
    this.serviciobd.deletealumno(this.user.contrasena);
  }
}
