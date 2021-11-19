import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-auto1',
  templateUrl: './auto1.component.html',
  styleUrls: ['./auto1.component.scss'],
})
export class Auto1Component implements OnInit {

    resultado:string="0";
    num1:string="0";
    num2:string="4500"
    public Show: Boolean = false;
    public buttonName:any ='Show';
  
    constructor(public alertcontroller: AlertController, private servicebd: ServiciobdService) { }
  
    ngOnInit() {}
  
    btnoculto(){
      this.Show =! this.Show;
    }
  
    CalcPasaje(){
      this.resultado=(parseInt(this.num1)*parseInt(this.num2)).toString();
      if(parseInt(this.num1) != 0){
        this.btnoculto();
      }
      
      
    }
    alerta(){
      if(parseInt(this.num1) != 0)
      this.servicebd.presentAlert("Se ha reservado el asiento Correctamente");
      else{
      this.servicebd.presentAlert("No se ha registrado ningún asiento");
      }
    }
  
}
