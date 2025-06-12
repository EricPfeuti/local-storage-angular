import { Component } from '@angular/core';
import { ContatosService } from '../services/contatos.service';

interface Contato {
  nome: string;
  email: string;
  telefone: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  contatos: Contato[] = [];
  contato: Contato = { nome: '', email: '', telefone: '' };

  indiceEdicao: number = -1;

  constructor(private contatosService: ContatosService) {}

  ngOnInit(){
    this.carregarContatos();
  }

  async carregarContatos(){
    this.contatos = await this.contatosService.obterContatos();
  }

  async salvarContato(){
    if(this.indiceEdicao >= 0){
      await this.contatosService.atualizarContato(this.indiceEdicao, this.contato);
    } else {
      await this.contatosService.adicionarContato(this.contato);
    }
    this.limparFormulario();
    this.carregarContatos();
  }

  editarContato(indice: number){
    this.contato = { ...this.contatos[indice] };
    this.indiceEdicao = indice;
  }

  async excluirContato(indice: number){
    await this.contatosService.excluirContato(indice);
    this.carregarContatos();
  }

  limparFormulario(){
    this.contato = { nome: '', email: '', telefone: '' };
    this.indiceEdicao = -1;
  }

}
