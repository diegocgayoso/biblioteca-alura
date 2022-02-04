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

  constructor(private service: AddBooksService) { }

  ngOnInit(){
    // this.dadosLivrosAdd = this.service.LivrosAdd;
    this.service.livros().subscribe((listaLivros: Biblioteca[]) =>
    {
      console.log(listaLivros);
      this.dadosLivrosAdd = listaLivros;
    })
  }

}
