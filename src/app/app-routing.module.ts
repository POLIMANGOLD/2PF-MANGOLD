import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './dashboard/toolbar/toolbar.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { LoginComponent } from './login/login.component';
import { AlumnosDetalleComponent } from './alumnos/pages/alumnos-detalle/alumnos-detalle.component';


const routes: Routes= [
{
path: 'dashboard',
component: ToolbarComponent,
children:[
  {
    path: 'alumnos',
    children:[{
       path: '',
       component: AlumnosComponent,
    },
    {
      path: ':id',
      component: AlumnosDetalleComponent,
    }

    ]
  }
]
},

{
  path: 'login',
  component: LoginComponent,
 
},

{
  path: '**',
  redirectTo: 'dashboard',
}
]



@NgModule({

  imports: [
    RouterModule.forRoot (routes)
  ],

  exports: [
    RouterModule

  ]
})
export class AppRoutingModule { }
