import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./pages/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'listaalumnos',
    loadChildren: () => import('./pagesadmin/listaalumnos/listaalumnos.module').then( m => m.ListaalumnosPageModule)
  },
  {
    path: 'listaconductores',
    loadChildren: () => import('./pagesadmin/listaconductores/listaconductores.module').then( m => m.ListaconductoresPageModule)
  },
  {
    path: 'homeadmin',
    loadChildren: () => import('./pagesadmin/homeadmin/homeadmin.module').then( m => m.HomeadminPageModule)
  },
  {
    path: 'perfilconductor',
    loadChildren: () => import('./pagesconductor/perfilconductor/perfilconductor.module').then( m => m.PerfilconductorPageModule)
  },
  {
    path: 'modificarconductor',
    loadChildren: () => import('./pagesconductor/modificarconductor/modificarconductor.module').then( m => m.ModificarconductorPageModule)
  },
  {
    path: 'camaraconductor',
    loadChildren: () => import('./pagesconductor/camaraconductor/camaraconductor.module').then( m => m.CamaraconductorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
