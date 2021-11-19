import { Component, OnInit } from '@angular/core';
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

  constructor(private serviciobd: ServiciobdService) { }

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
