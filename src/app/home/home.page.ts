import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServiciobdService } from '../services/serviciobd.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  conductor: any [] =[]

  constructor(private serviciobd: ServiciobdService, private menu: MenuController){
    this.menu.enable(true);
   }

  ngOnInit() {
    
    this.serviciobd.dbState().subscribe((res) =>{
      if(res){
        this.serviciobd.fetchconductor().subscribe(conductores =>{
          this.conductor = conductores;
        })
      }
    });
  }



}
