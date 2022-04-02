import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IgrejasService {

  private basePath = '/igrejas';

  constructor(
    private _fireStore: AngularFirestore,
    private _fireStorage: AngularFireStorage
  ) { }

  criaIgreja(avaliacao: any, fileUpload: any) {
    const igrejas = this._fireStore.collection('igrejas');
    igrejas.add({...avaliacao, downloadUrl: fileUpload}).then(doc => doc.update({ id: doc.id }));
  }

  listarIgrejas() {
    return this._fireStore.collection('igrejas').valueChanges();
  }

  pushFileToStorage(avaliacao: any, fileUpload: any) {
    const filePath = `${this.basePath}/${fileUpload.name}_${avaliacao.nome}_${new Date()}`;
    const storageRef = this._fireStorage.ref(filePath);
    const uploadTask = this._fireStorage.upload(filePath, fileUpload);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          this.criaIgreja(avaliacao, fileUpload.url);
        });
      })
    ).subscribe();
  }

  criaComentarioDousuario(idIgreja: string, idUsuario: string, avaliacao: object) {
    return this._fireStore.collection('igrejas')
    .doc(idIgreja).collection('avaliações').doc(idUsuario).set(avaliacao);
  }

  listaComentariosDoIgreja(idIgreja: string) {
    return this._fireStore.collection('igrejas')
    .doc(idIgreja).collection('avaliações').valueChanges();
  }

  excluirComentario(idIgreja: string, idUsuario: string) {
    return this._fireStore.collection('igrejas')
    .doc(idIgreja).collection('avaliações').doc(idUsuario).delete();
  }
  
}

