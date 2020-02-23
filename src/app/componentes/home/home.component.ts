import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/servicios/equipos.service';
import { EquipoInterface } from 'src/app/models/equipo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private equipos : EquipoInterface[];
  constructor(private equiposService : EquiposService) { }

  ngOnInit() {
    this.obtenerEquipos();
  }

  obtenerEquipos() {
    this.equiposService.obtenerEquipos().subscribe(
      equipos => {
        this.equipos = equipos;
      });
  }

}
