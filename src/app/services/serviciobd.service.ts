import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { BehaviorSubject, Observable } from 'rxjs';
import { Admin } from './admin';
import { Alumno } from './alumno';
import { Conductor } from './conductor';

@Injectable({
  providedIn: 'root'
})
export class ServiciobdService {

  public database: SQLiteObject;

  tablaAlumno: string ="CREATE TABLE IF NOT EXISTS ALUMNO(rut VARCHAR(10)PRIMARY KEY, nombre VARCHAR(20) NOT NULL, apellido VARCHAR(20) NOT NULL, contrasena VARCHAR(20) NOT NULL, correo VARCHAR(30) NOT NULL);";

  RegistroAlumno: string ="INSERT or IGNORE INTO ALUMNO( rut, nombre, apellido, contrasena, correo) VALUES ( '20857667-4', 'jean', 'Grasset', '12345', 'jean@gmail.com');";

  tablaconductor: string= "CREATE TABLE IF NOT EXISTS CONDUCTOR( rut VARCHAR(10) PRIMARY KEY,contrasena VARCHAR(10) NOT NULL, nombre VARCHAR(20) NOT NULL, apellido VARCHAR(20) NOT NULL, destino VARCHAR(30) NOT NULL, valor NUMBER NOT NULL, imagen VARCHAR(30) NULL);";
  registroconductor1: string ="INSERT OR IGNORE INTO CONDUCTOR(rut, contrasena, nombre, apellido, destino, valor, imagen) VALUES ('20857667-3','1234', 'Fernanda', 'Robertson', 'Colina', 4100, 'auto1.webp');";
  registroconductor2: string ="INSERT OR IGNORE INTO CONDUCTOR(rut, contrasena, nombre, apellido, destino, valor, imagen) VALUES ('20431234-1','1234','Matias', 'Leyton', 'Conchalí', 2400, 'auto2.jpg');";
  registroconductor3: string ="INSERT OR IGNORE INTO CONDUCTOR(rut, contrasena, nombre, apellido, destino, valor, imagen) VALUES ('20857667-4','123456','jean', 'Grasset', 'Quilicura',  3450, 'auto3.png');";

  tablaAdmin: string ="CREATE TABLE IF NOT EXISTS ADMIN(id PRIMARY KEY autoincrement, llave VARCHAR(20), contrasena VARCHAR(20));";

  registroAdmin: string ="INSERT OR IGNORE INTO ADMIN(id, llave, contrasena) VALUES (1,'KEY244466666', '1234');";

  listaalumno = new BehaviorSubject([]);
  alumno = new BehaviorSubject([]);
  listaconductor = new BehaviorSubject([]);
  conductor = new BehaviorSubject([]);
  admin = new BehaviorSubject([]);
  listaadmin = new BehaviorSubject([]);

  private isDbReady: BehaviorSubject<boolean> =new BehaviorSubject(false);

  constructor(public AlertController:AlertController, private sqlite: SQLite, private platform: Platform,public router:Router,private activeroute: ActivatedRoute ) {
    this.crearBD();
   }
//--------------FETCH-------------------------
  fetchalumno(): Observable<Alumno[]> {
    return this.listaalumno.asObservable();
  }
  fetchregistro(): Observable<Alumno[]> {
    return this.alumno.asObservable();
  }
  fetchconductor():Observable<Conductor[]>{
    return this.listaconductor.asObservable();
  }
  dbState() {
    return this.isDbReady.asObservable();
  }
//--------------SERVICIOS-------------------------

   servicebdState() {
    return this.isDbReady.asObservable();
   }

   async crearTablas() {
    try {
      await this.database.executeSql(this.tablaAlumno, []);
      await this.database.executeSql(this.RegistroAlumno, []);
      await this.database.executeSql(this.tablaconductor, []);
      await this.database.executeSql(this.registroconductor1, []);
      await this.database.executeSql(this.registroconductor2, []);
      await this.database.executeSql(this.registroconductor3, []);
      await this.database.executeSql(this.tablaAdmin, []);
      await this.database.executeSql(this.registroAdmin, []);
      this.buscaralumno();
      this.buscarconductor();
      this.buscaradmin();
      this.isDbReady.next(true);
    
    } catch (e) {
      this.presentAlert("error creartabla " + e);
    }
  }
   crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'noticias3.db',
        location: 'default'

      }).then((db: SQLiteObject) => {
        this.database = db;
        //this.presentAlert("BD Creada");
        //llamamos a la creación de tablas
        this.crearTablas();
      }).catch(e => this.presentAlert(e));
    })
  }

  async presentAlert(mensaje: string) {
    const alert = await this.AlertController.create({
      header: 'Alert',
      message: mensaje,
      buttons: ['Ok']
    });

  await alert.present();
}


//--------------------Buscar---------------------
buscaralumno() {
  //this.presentAlert("a");
  return this.database.executeSql('SELECT * FROM ALUMNO', []).then(res => {
    let items: Alumno[] = [];
    //this.presentAlert("b");
    if (res.rows.length > 0) {
      //this.presentAlert("c");
      for (var i = 0; i < res.rows.length; i++) { 
        //this.presentAlert("d");
        items.push({ 
          rut: res.rows.item(i).rut,
          nombre: res.rows.item(i).nombre,  
          apellido: res.rows.item(i).apellido,
          contrasena: res.rows.item(i).contrasena,
          correo: res.rows.item(i).correo,
         });
      }
    }
    //this.presentAlert("d");
    this.listaalumno.next(items);
  });
}
buscarconductor() {
  //this.presentAlert("a");
  return this.database.executeSql('SELECT * FROM CONDUCTOR', []).then(res => {
    let items: Conductor[] = [];

    //this.presentAlert("b");
    if (res.rows.length > 0) {
      //this.presentAlert("c");
      for (var i = 0; i < res.rows.length; i++) { 
        //this.presentAlert("d");
        items.push({ 
          rut: res.rows.item(i).rut,
          contrasena: res.rows.item(i).contrasena,
          nombre: res.rows.item(i).nombre,  
          apellido: res.rows.item(i).apellido,
          destino: res.rows.item(i).destino,
          valor: res.rows.item(i).valor,
          imagen: res.rows.item(i).imagen
         });
      }
    }
    //this.presentAlert("d");
    this.listaconductor.next(items);
  });
}
buscaradmin() {
  //this.presentAlert("a");
  return this.database.executeSql('SELECT * FROM ADMIN', []).then(res => {
    let items: Admin[] = [];
    //this.presentAlert("b");
    if (res.rows.length > 0) {
      //this.presentAlert("c");
      for (var i = 0; i < res.rows.length; i++) { 
        //this.presentAlert("d");
        items.push({ 
          id: res.rows.item(i).id,
          llave: res.rows.item(i).llave,  
          contrasena: res.rows.item(i).contrasena
         });
      }
    }
    //this.presentAlert("d");
    this.listaadmin.next(items);
  });
}
//------------------Funciones Login ------------------------
loginalumno (rut, contrasena) {
  let data = [rut, contrasena]
  return this.database.executeSql('SELECT rut FROM ALUMNO WHERE rut = ? AND contrasena = ?', [data[0], data[1]]).then(res => {
  let items: Alumno[] = [];
  if (res.rows.length > 0) {
    for (var i = 0; i < res.rows.length; i++) {
      items.push({
            rut: res.rows.item(i).rut,
            nombre: res.rows.item(i).nombre,  
            apellido: res.rows.item(i).apellido,
            contrasena: res.rows.item(i).contrasena,
            correo: res.rows.item(i).correo,
      });
    }    
    this.router.navigate(['/home'])
  }
  this.alumno.next(items);
  });
  }

  loginadmin (llave,contrasena) {
    let data = [llave, contrasena]
    return this.database.executeSql('SELECT llave FROM ADMIN WHERE llave = ? AND contrasena = ?', [data[0], data[1]]).then(res => {
    let items: Admin[] = [];
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        items.push({
              id: res.rows.item(i).id,
              llave: res.rows.item(i).llave,
              contrasena: res.rows.item(i).contrasena
        });
      }    
      this.router.navigate(['/homeadmin'])
    }
    this.admin.next(items);
    });
  }
  loginconductor (rut,contrasena) {
    let data = [rut, contrasena]
    return this.database.executeSql('SELECT rut FROM CONDUCTOR WHERE rut = ? AND contrasena = ?', [data[0], data[1]]).then(res => {
    let items: Conductor[] = [];
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        items.push({
          rut: res.rows.item(i).rut,
          contrasena: res.rows.item(i).contrasena,
          nombre: res.rows.item(i).nombre,  
          apellido: res.rows.item(i).apellido,
          destino: res.rows.item(i).destino,
          valor: res.rows.item(i).valor,
          imagen: res.rows.item(i).imagen
        });
      }    
      this.router.navigate(['/homeconductor'])
    }
    this.conductor.next(items);
    });
  }




//----------------CRUD ALUMNO DESDE ALUMNO---------------------------
  addAlumno(rut, nombre, apellido, contrasena, correo) {
  let data = [rut, nombre, apellido, contrasena, correo];
  return this.database.executeSql('INSERT INTO ALUMNO (rut, nombre, apellido, contrasena, correo) VALUES (? ,? ,? ,? ,?)', data)
    .then(res => {
    this.buscaralumno();
    this.presentAlert("El Usuario fue creado");
    this.router.navigate(['/login']);
    });
  } 
  deletealumno(contrasena) {
    let data = [contrasena];
      return this.database.executeSql('DELETE FROM ALUMNO WHERE contrasena = ?', data).then(_ => {
        this.buscaralumno();
        this.presentAlert("Usuario Eliminado con exito"); 
        this.router.navigate(['/login']);
      });      
  }
  updatealumno(rut, nombre, apellido, contrasena, correo) {
    let data = [nombre, apellido, contrasena, correo, rut];
    return this.database.executeSql('UPDATE ALUMNO SET nombre = ?, apellido = ?, contrasena = ?, correo = ? WHERE rut = ?', data)
    .then(data4 => {
        this.buscaralumno();
        this.presentAlert("Usuario editado con exito");
        this.router.navigate(['/login'])
      })
  }
//--------------CRUD CONDUCTOR DESDE CONDUCTOR-------------------
  deleteconductor(rut) {
    let data = [rut];
      return this.database.executeSql('DELETE FROM CONDUCTOR WHERE rut = ?', data).then(_ => {
        this.buscarconductor();
        this.presentAlert("Usuario Eliminado con exito"); 

      });      
  }

  updateconductor(rut, nombre, apellido, destino, valor) {
    let data = [nombre, apellido, , destino, valor];
    return this.database.executeSql('UPDATE CONDUCTOR SET nombre = ?, apellido = ?, destino = ?, valor = ? WHERE rut = ?', data)
    .then(data4 => {
        this.buscarconductor();
        this.presentAlert("Usuario editado con exito");
        this.router.navigate(['/login']);
      })
  }
//-----------FUNCIONES ADMIN-----------
  createadmin(llave, contrasena){
    let data = [ llave, contrasena];
    return this.database.executeSql('INSERT INTO ADMIN(llave, contrasena) VALUES (? ,?)', data)
      .then(res => {
      this.buscaradmin();
      this.presentAlert("El Usuario fue Alterado");
      });
}
//----------------FUNCIONES ADMIN PARA CONDUCTORES-----------------

deleteconductoradmin(rut) {
  let data = [rut];
    return this.database.executeSql('DELETE FROM CONDUCTOR WHERE rut = ?', data).then(_ => {
      this.buscarconductor();
    });      
}
//----------------FUNCIONES ADMIN PARA ALUMNOS-----------------

deletealumnoad(rut) {
  let data = [rut];
    return this.database.executeSql('DELETE FROM ALUMNO WHERE rut = ?', data).then(_ => {
      this.buscaralumno();
    });      
}
addConductor(rut, nombre, apellido, destino, valor, imagen){
  let data = [rut, nombre, apellido, destino, valor, imagen];
  return this.database.executeSql('INSERT INTO CONDUCTOR(rut, nombre, apellido, destino, valor, imagen2) VALUES (? ,? ,? ,? ,?, ?)', data)
    .then(res => {
    this.buscarconductor();
    });
}



}
