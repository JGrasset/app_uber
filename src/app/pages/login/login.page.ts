import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any = [
    {
      rut:null,
      pass:null
    }
  ]

  constructor(private seriviciobd:ServiciobdService, private menu: MenuController) {
    this.menu.enable(true);
   }

  ngOnInit() {
    this.seriviciobd.servicebdState().subscribe((res) =>{
      if(res){
        this.seriviciobd.fetchregistro().subscribe(item => {
          this.user = item;
        })
      }
    });
  }
login(){
  this.seriviciobd.loginalumno(this.user.rut, this.user.pass);
  this.seriviciobd.loginadmin(this.user.rut, this.user.pass);
  this.seriviciobd.loginconductor(this.user.rut, this.user.pass);
}
}
