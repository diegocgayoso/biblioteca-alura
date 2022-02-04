import { Biblioteca } from './../models/lib.model';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddBooksService } from '../services/addBooks.service';

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

  constructor(private service: AddBooksService) {}

  addLivro() {
    console.log('Novo livro foi adicionado!');

    const dadosLivro: Biblioteca = {
      titulo: this.titulo,
      autor: this.autor,
      descricao: this.descricao,
    };

    this.service.adicionar(dadosLivro).subscribe((result) => {
      console.log(result);
      this.limparCampos();
    },(error)=> console.error(error));
    this.limparCampos();

  }

  limparCampos() {
    this.titulo = '';
    this.autor = '';
    this.descricao = '';
  }
  ngOnInit(): void {}
}
