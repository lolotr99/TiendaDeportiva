import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ArticuloInterface } from '../models/articulo';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { 
    this.articuloCollection = afs.collection<ArticuloInterface>('Articulos');
    this.articulos = this.articuloCollection.valueChanges();
  }
 
  private articuloCollection: AngularFirestoreCollection<ArticuloInterface>;
  private articulos: Observable<ArticuloInterface[]>;
  private articuloDoc : AngularFirestoreDocument<ArticuloInterface>;
  private articulo : Observable<ArticuloInterface>;
  public selectedArticulo: ArticuloInterface = {
    id: null
  };

  getArticulos() {
    return this.articulos = this.articuloCollection.snapshotChanges()
    .pipe(map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as ArticuloInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getOneArticulo(idArticulo : string) {
    this.articuloDoc = this.afs.doc<ArticuloInterface>(`Articulos/${idArticulo}`);
    return this.articulo = this.articuloDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as ArticuloInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addArticulo(articulo : ArticuloInterface, imagenArticulo : string) :void {
    articulo.imagenArticulo = imagenArticulo;
    this.articuloCollection.add(articulo);
  }

  updateArticulo(articulo : ArticuloInterface, imagenArticulo: string) :void {
    let idArticulo = articulo.id;
    this.articuloDoc = this.afs.doc<ArticuloInterface>(`Articulos/${idArticulo}`);
    articulo.imagenArticulo = imagenArticulo;
    this.articuloDoc.update(articulo);
  }

  deleteArticulo(idArticulo : string) :void {
    this.articuloDoc = this.afs.doc<ArticuloInterface>(`Articulos/${idArticulo}`);
    this.articuloDoc.delete();
  }

}
