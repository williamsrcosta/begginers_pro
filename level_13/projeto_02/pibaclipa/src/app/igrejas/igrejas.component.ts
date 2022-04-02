import { NovaIgrejaComponent } from './../nova-igreja/nova-igreja.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IgrejaComponent } from '../igreja/igreja.component';
import { IgrejasService } from '../shared/igrejas.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-igrejas',
  templateUrl: './igrejas.component.html',
  styleUrls: ['./igrejas.component.scss']
})
export class IgrejasComponent implements OnInit {

  toSearch: any = '';
  siglas: Array<any> = [];

  igrejas: Array<any> = [];

  usuarioLogado: any;

  constructor(
    private _http: HttpClient, private dialog: MatDialog,
    private _igrejasService: IgrejasService,
    private _authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.listarIgrejas();
    
    this._authService.user$
    .subscribe(userInfos => {
      this.usuarioLogado = userInfos;
    });

    this._http.get('https://servicodados.ibge.gov.br/api/v1/localidades/regioes/1|2|3|4|5/estados').subscribe((res: any) => {
      let estados = res;
      estados = estados.sort((a: any, b: any) => (a.nome > b.nome) ? 1 : -1);
      estados.forEach((estado: any) => {
        this.siglas.push({
          nome: estado.nome,
          sigla: estado.sigla
        })
      })
    })
  }

  async listarIgrejas() {
    await this._igrejasService.listarIgrejas()
    .subscribe(rests => {
      this.igrejas = rests.map(rest => rest);
      this.igrejas = this.igrejas.sort((a, b) => b.criadoEm.seconds - a.criadoEm.seconds);
    });
  }

  novaIgreja(){
    this.dialog.open(NovaIgrejaComponent, {
      width: '80%',
      height: 'max-content',
      data: {
        usuario: this.usuarioLogado,
        siglas: this.siglas
      }
    });
  }

  sair() {
    this._authService.sair();
  }

  abrirIgreja(igreja: any) {
    this.dialog.open(IgrejaComponent, {
      width: "80%",
      height: "98vh",
      data: igreja,
      panelClass: "custom-dialog-container"
    })
  }

}
