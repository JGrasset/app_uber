import { Component, OnInit } from '@angular/core';
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

  constructor(private seriviciobd:ServiciobdService) { }

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
}
}
