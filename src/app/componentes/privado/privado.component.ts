import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataApiService } from 'src/app/servicios/data-api.service';
import { ArticuloInterface } from 'src/app/models/articulo';



@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.css']
})
export class PrivadoComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private articulos: ArticuloInterface[];


  ngOnInit() {
    this.getListArticulos();
  }

  
  getListArticulos() {
    this.dataApi.getArticulos()
      .subscribe(articulos => {
        this.articulos = articulos;
      });
  }
}
