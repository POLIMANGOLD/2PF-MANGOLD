import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumnos } from '../alumnos/alumnos.component';


@Injectable({
  providedIn: 'root'
})
export class AlumnosServiciosService {
  private alumnos$ = new BehaviorSubject([
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
    },
  ]



  );

  constructor() { }

 get obtenerAlumno(): Observable<Alumnos[]>{
    return this.alumnos$.asObservable();
  }
}
