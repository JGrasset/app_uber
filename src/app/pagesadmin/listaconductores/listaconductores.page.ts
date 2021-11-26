import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-listaconductores',
  templateUrl: './listaconductores.page.html',
  styleUrls: ['./listaconductores.page.scss'],
})
export class ListaconductoresPage implements OnInit {
  conductor: any [] =[]

  constructor(private serviciobd: ServiciobdService, private router: Router){}

  ngOnInit() { 
    this.serviciobd.dbState().subscribe((res) =>{
      if(res){
        this.serviciobd.fetchconductor().subscribe(conductores =>{
          this.conductor = conductores;
        })
      }
    });
  }
  modificar(item){
    let navigationExtras: NavigationExtras = {
      state: {
        rut: item.rut,
      }
    }
    this.router.navigate(['/alterarconductor'], navigationExtras);
  }
  eliminar(item){
    this.serviciobd.deleteconductor(item.rut);
  } 
}
