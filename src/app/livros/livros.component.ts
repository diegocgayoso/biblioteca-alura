import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  titulo: string = '';
  autor: string = '';
  descricao: string = '';

  @Input() dadosLivrosAdd: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
