import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/servicios/data-api.service';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.css']
})
export class PrivadoComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public articulos = [];
  public articulo = "";
  ngOnInit() {
    this.dataApi.getArticulos().subscribe(articulos => {
      console.log("Articulos", articulos);
      this.articulos = articulos;
    })
  }

}
