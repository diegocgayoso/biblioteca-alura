import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novolivro',
  templateUrl: './novolivro.component.html',
  styleUrls: ['./novolivro.component.css'],
})
export class NovolivroComponent implements OnInit {
  title = 'Formulário';

  constructor() {}

  addLivro() {
    console.log('Novo livro foi adicionado!');
  }
  ngOnInit(): void {}
}
