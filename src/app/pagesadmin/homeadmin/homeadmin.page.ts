import { Component, OnInit } from '@angular/core';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.page.html',
  styleUrls: ['./homeadmin.page.scss'],
})
export class HomeadminPage implements OnInit {
  
  conductor: any [] =[]

  constructor(private serviciobd: ServiciobdService) {}

  ngOnInit() {
    
    this.serviciobd.dbState().subscribe((res) =>{
      if(res){
        this.serviciobd.fetchconductor().subscribe(conductores =>{
          console.log('items', conductores);
          this.conductor = conductores;
        })
      }
    });
  }
}
