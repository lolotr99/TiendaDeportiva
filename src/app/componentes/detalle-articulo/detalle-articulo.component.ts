import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/servicios/data-api.service';
import { ArticuloInterface } from 'src/app/models/articulo';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-detalle-articulo',
  templateUrl: './detalle-articulo.component.html',
  styleUrls: ['./detalle-articulo.component.css']
})
export class DetalleArticuloComponent implements OnInit {

  constructor(private dataApi : DataApiService, private route: ActivatedRoute, private router : Router) { }
  public articulo: ArticuloInterface = {} ;

  ngOnInit() {
    const idArticulo = this.route.snapshot.params['id'];
    this.getDetailsArticulo(idArticulo);
  }

  getDetailsArticulo(idArticulo : string) :void {
    this.dataApi.getOneArticulo(idArticulo).subscribe(articulo => {
      this.articulo = articulo;
    })
  }

  onDeleteArticulo(idArticulo: string): void {
    const confirmacion = confirm('¿Estás seguro?');
    if (confirmacion) {
      this.dataApi.deleteArticulo(idArticulo);
      this.router.navigate(['/privado']);
    }
  }

  onPreUpdateArticulo(articulo: ArticuloInterface) {
    this.dataApi.selectedArticulo = Object.assign({}, articulo);
  }

}
