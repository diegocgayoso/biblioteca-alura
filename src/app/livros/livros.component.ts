import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { AddBooksService } from '../services/addBooks.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css'],
})
export class LivrosComponent implements OnInit {
  dadosLivros: any = [];
  interval: any;

  constructor(private service: AddBooksService, private router: Router) {}

  getAllBooks(): void {
    this.service.showLivros().subscribe(
      (books: any) => {
        this.dadosLivros = books;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getAllBooks();
  }

  editar() {
    this.service.editar();
  }

  deletar(id: any) {
    // console.log(this.dadosLivros);

    this.service.deletarLivro(id);

    const index = this.dadosLivros.findIndex((item: any) => item.id === id);
    console.log(index);

    this.dadosLivros.splice(index, 1);
  }
}
