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
  addArticulo() {}
  updateArticulo(){}
  deleteArticulo() {}

}
