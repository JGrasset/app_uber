import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificarconductor',
  templateUrl: './modificarconductor.page.html',
  styleUrls: ['./modificarconductor.page.scss'],
})
export class ModificarconductorPage implements OnInit {
  conductor: any = [
    {
      pass:null,
      destino:null,
      valor:null,
      imagen:null
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  

}
