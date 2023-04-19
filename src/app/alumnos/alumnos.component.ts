import { NgPluralCase } from '@angular/common';
import { Component } from '@angular/core';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnosServiciosService } from '../servicios/alumnos-servicios.service';
import { TimeService, Time } from '../servicios/time.service';
import { Observable } from 'rxjs';


export interface Alumnos {
  nombre: string;
  apellido: string;
  curso: number;
  carrera: string
}
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {


dataSource= new MatTableDataSource <Alumnos>

displayedColumns: string [] = ["nombreCompleto", "curso", "carrera"]

horaActual$: Observable <String>;

constructor ( private matDialog: MatDialog,
  private alumnosService: AlumnosServiciosService,
  private timeService: TimeService){
    this.alumnosService.obtenerAlumno
    .subscribe ((Alumnos) => {this.dataSource.data = Alumnos})
    this.horaActual$ = this.timeService.reloj; 
  }

abrirAlumno (): void{
const dialog = this.matDialog.open ( AbmAlumnosComponent)


dialog.afterClosed().subscribe((valor) => {
if(valor){
  this.dataSource.data = [...this.dataSource.data, valor]
}

})
}}