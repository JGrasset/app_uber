import { Component } from '@angular/core';
import { ServiciobdService } from '../services/serviciobd.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  conductor: any [] =[]

  constructor(private serviciobd: ServiciobdService) {}

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
