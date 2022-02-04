import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddBooksService {
  LivrosAdd: any[];

  constructor() {
    this.LivrosAdd = [];
  }

  get getLivros(){
    return this.LivrosAdd
  }

  adicionar(newBook: any){
    this.LivrosAdd.push(newBook);
  }
}
