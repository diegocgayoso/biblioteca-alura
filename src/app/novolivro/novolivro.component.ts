import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-novolivro',
  templateUrl: './novolivro.component.html',
  styleUrls: ['./novolivro.component.css'],
})
export class NovolivroComponent implements OnInit {
  title = 'Formulário';

  @Output() submitAdd = new EventEmitter<any>();

  titulo: string = '';
  autor: string = '';
  descricao: string = '';

  constructor() {}

  addLivro() {
    console.log('Novo livro foi adicionado!');
    const dadosLivro = {titulo: this.titulo, autor: this.autor, descricao: this.descricao}
    this.submitAdd.emit(dadosLivro);
    this.limparCampos();
  }

  limparCampos(){
    this.titulo = '';
    this.autor = '';
    this.descricao = '';
  }
  ngOnInit(): void {}
}
