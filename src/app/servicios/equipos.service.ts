import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EquipoInterface } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  URL = "http://localhost/angular/";

  constructor(private http: HttpClient) { }

  obtenerEquipos(){
    return this.http.get<EquipoInterface[]>(`${this.URL}ObtenerEquipos.php`);
  }

  seleccionarEquipos(equipo: string) {
    return this.http.get(`${this.URL}ObtenerUnEquipo.php?equipo=${equipo}`);
  }
}
