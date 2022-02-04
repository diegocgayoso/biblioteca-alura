import { Biblioteca } from './../models/lib.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddBooksService {
  private LivrosAdd: any[];
  private url = 'http://localhost:3000/biblioteca';

  constructor( private httpClient: HttpClient ) {
    this.LivrosAdd = [];
  }

  get getLivros(){
    return this.LivrosAdd
  }

  livros(): Observable<Biblioteca[]> {
    return this.httpClient.get<Biblioteca[]>(this.url);
  }



  adicionar(newBook: Biblioteca): Observable<Biblioteca>{
    return this.httpClient.post<Biblioteca>(this.url, newBook);
  }
}
