import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciobdService } from './services/serviciobd.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu:MenuController, private serviciobd:ServiciobdService, private router:Router) {}

  salir(){
    this.CloseMenu();
    this.serviciobd.presentAlert("Se ha cerrado Sesión")
    this.router.navigate(['/login'])
  }

  CloseMenu(){
    this.menu.close();
  }
}
