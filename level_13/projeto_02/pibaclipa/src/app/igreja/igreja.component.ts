import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth/auth.service';
import { IgrejasService } from '../shared/igrejas.service';

@Component({
  selector: 'app-igreja',
  templateUrl: './igreja.component.html',
  styleUrls: ['./igreja.component.scss']
})
export class IgrejaComponent implements OnInit {

  usuarioLogado: any;

  mediaGeral: Array<any> = [];

  ratingArr: Array<number> = [];
  rating: number = 5;
  starCount: number = 5;

  usuario_rating: number = 3;
  usuario_ratingArr: Array<number> = [];
  comentarios_usuarios_ratingArr: Array<number> = [];

  comentario_usuario: any;
  comentarios_usuarios: Array<any> = [];

  constructor(
    public dialogRef: MatDialogRef<IgrejaComponent>,
    @Inject(MAT_DIALOG_DATA) public igreja: any,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private _igrejaService: IgrejasService,
    public _authService: AuthService,
  ) { }

  ngOnInit(): void {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }

    for (let index = 0; index < this.starCount; index++) {
      this.usuario_ratingArr.push(index);
    }

    for (let index = 0; index < this.starCount; index++) {
      this.comentarios_usuarios_ratingArr.push(index);
    }

    this._authService.user$
    .subscribe(userInfos => {
      this.usuarioLogado = userInfos;
    });

    this.listarComentarios(this.igreja.estrelas);
  }

  showIcon(contagem: number, index: number) {
    if (contagem >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(rating: number) {
    this.usuario_rating = rating;
    return false;
  }

  enviarComentario() {
    this._igrejaService
    .criaComentarioDousuario(this.igreja.id, this.usuarioLogado.uid, {
      comentario: this.comentario_usuario,
      estrelas: this.usuario_rating,
      comentadoEm: new Date(),
      autor: {
        nome: this.usuarioLogado.displayName,
        foto: this.usuarioLogado.photoURL,
        uid: this.usuarioLogado.uid
      }
    }).then(() => this.comentario_usuario = '');
  }

  listarComentarios(param: number) {
    this.mediaGeral = [];
    this._igrejaService.listaComentariosDoIgreja(this.igreja.id)
    .subscribe(comentarios => {
      this.comentarios_usuarios = comentarios.map(comentario => comentario);
      comentarios.forEach(comentario => {
        // return this.mediaGeral.push(comentario.estrelas);
      });
      this.mediaGeral.push(param);
      const sum = this.mediaGeral.reduce((a: number, b: number) => a + b, 0);
      const toDisplay = Math.round(sum / this.mediaGeral.length);
      return this.rating = toDisplay;
    });
  }

  excluirComentario(comentario: any) {
    if (window.confirm('Deseja mesmo excluir esse coment??rio?')) {
      this._igrejaService.excluirComentario(this.igreja.id, comentario.autor.uid);
      this.snackBar.open('Coment??rio excluido com sucesso.', 'X', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        duration: 5000
      })
    }
  }

  formataData(seconds: number) {
    const data = new Date(seconds * 1000).toLocaleDateString();
    const horario = new Date(seconds * 1000).toLocaleTimeString();
    
    return `${data} ??s ${horario}`;
  }
}
