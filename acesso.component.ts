import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.css'
})
export class AcessoComponent {
  permissao: string = '';
  habilita:boolean = true;
  listaDePermitidos: string[] = ['root', 'admin', 'visitante']
  public onLogando(): void{
    if(this.listaDePermitidos.includes(this.permissao)){
      this.habilita = false;
    } else{
      this.habilita = true;
    }
  }
}
