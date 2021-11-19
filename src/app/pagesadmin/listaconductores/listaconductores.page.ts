import { Component, OnInit } from '@angular/core';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-listaconductores',
  templateUrl: './listaconductores.page.html',
  styleUrls: ['./listaconductores.page.scss'],
})
export class ListaconductoresPage implements OnInit {
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
