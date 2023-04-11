import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './nombre-completo.pipe';
import { AlumnosModule } from '../alumnos/alumnos.module';



@NgModule({
  declarations: [
    NombreCompletoPipe
  ],
  imports: [
    CommonModule,
  
  ],
  exports: [
    NombreCompletoPipe
  ]
})
export class PipesModule { }
