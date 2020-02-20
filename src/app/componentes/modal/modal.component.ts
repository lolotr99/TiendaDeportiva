import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../servicios/data-api.service';
import { ArticuloInterface } from '../../models/articulo';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService, private storage: AngularFireStorage) { }
  @ViewChild('btnClose', {static: false}) btnClose: ElementRef;
  @ViewChild('imageArticulo', {static: false}) inputImageArticulo: ElementRef; 
  uploadPercent : Observable<number>;
  urlImagen : Observable<string>;

  onUpload(e) {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `upload/articulo_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImagen = ref.getDownloadURL())).subscribe();
  }


  ngOnInit() {
  }

  onSaveArticulo(articuloForm: NgForm): void {
    if (articuloForm.value.id == null) {
      // New 
      this.dataApi.addArticulo(articuloForm.value, this.inputImageArticulo.nativeElement.value);
    } else {
      // Update
      this.dataApi.updateArticulo(articuloForm.value, this.inputImageArticulo.nativeElement.value);
    }
    articuloForm.resetForm();
    this.inputImageArticulo.nativeElement.value ="";
    this.btnClose.nativeElement.click();
  }

}