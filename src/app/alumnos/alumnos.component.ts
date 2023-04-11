import { NgPluralCase } from '@angular/common';
import { Component } from '@angular/core';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';


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
alumno: Alumnos[] =[
  {
    nombre: "Paula",
    apellido: "Mangold",
    curso: 1,
    carrera: "Administracion"
  },

  {
    nombre: "Marcos",
    apellido: "Aguirre",
    curso: 2,
    carrera: "Contador"
  },

  {
    nombre: "Juan",
    apellido: "Perez",
    curso: 3,
    carrera: "Abogado"
  }
]

dataSource= new MatTableDataSource (this.alumno)

displayedColumns: string [] = ["nombreCompleto", "curso", "carrera"]

constructor ( private matDialog: MatDialog){}

abrirAlumno (): void{
const dialog = this.matDialog.open ( AbmAlumnosComponent)


dialog.afterClosed().subscribe((valor) => {
if(valor){
  this.dataSource.data = [...this.dataSource.data, valor]
}

})
}}