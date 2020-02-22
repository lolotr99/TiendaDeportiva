import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/servicios/equipos.service';
import { EquipoInterface } from 'src/app/models/equipo';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private equipos : EquipoInterface[];
  constructor(private equiposService : EquiposService) { }

  ngOnInit() {
    var buscador = (<HTMLInputElement>document.getElementById("buscador")).value;
    this.obtenerEquipos();
    $("#buscador").on("change", function (e) {
      this.seleccionarEquipos(buscador);
    });
  }

  obtenerEquipos() {
    this.equiposService.obtenerEquipos().subscribe(
      equipos => {
        this.equipos = equipos;
      });
  }

  seleccionarEquipos(equipo) {
    this.equiposService.seleccionarEquipos(equipo).subscribe(
      result => this.equipos = result[0]
    );
    document.getElementById("tabla").style.display = "none";
    document.getElementById("equipobuscado").style.display = "block";
  }
}
