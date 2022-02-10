import { Router } from '@angular/router';
import { Biblioteca } from './../models/lib.model';
import { Component, Input, OnInit } from '@angular/core';
import { AddBooksService } from '../services/addBooks.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  dadosLivrosAdd: any = [];

  constructor(private service: AddBooksService) {
  }

  getAllBooks(): void {
    this.service.showLivros()
      .subscribe(
        (books: any) => {
          this.dadosLivrosAdd = books;
        },
        (error: any) => {
          console.log(error);
        });
  }

  ngOnInit(){
    this.getAllBooks();
  }

  editar(){
    this.service.editar();
  }

  deletar(id: any){
    console.log(id)
    this.service.deletarLivro(id)
    setInterval(() => {
      this.getAllBooks();
    },2000)
    this.getAllBooks();
  }



}
