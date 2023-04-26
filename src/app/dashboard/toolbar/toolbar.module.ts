import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AlumnosModule } from '../../alumnos/alumnos.module';
import { DirectivasModule } from '../../shared/directivas/directivas.module';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';






MatSidenavModule
@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    AlumnosModule,
    DirectivasModule,
    RouterModule,
    MatListModule,
    
  ], 
  exports:[
    ToolbarComponent
  ] 
})
export class ToolbarModule { }
