import { Router } from '@angular/router';
import { Biblioteca } from './../models/lib.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, subscribeOn, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddBooksService {
  // private LivrosAdd: any[];
  private url = 'http://localhost:3000/biblioteca';

  constructor(private http: HttpClient) {
    // this.LivrosAdd = [];
  }

  // get getLivros() {
  //   return this.LivrosAdd;
  // }

  showLivros(): Observable<Biblioteca[]> {
    return this.http.get<Biblioteca[]>(this.url).pipe(
      catchError(this.handleError)
    );
  }

  adicionar(novoLivro: Biblioteca): Observable<Biblioteca> {
    return this.http.post<Biblioteca>(this.url, novoLivro).pipe(
      catchError(this.handleError)
    );
  }

  deletarLivro(idLivro: any) {
    const livroDelete = this.url + '/' + idLivro;
    return this.http.delete(livroDelete)
      .subscribe((data)=> {console.log(data)})
  }

  editar(){
    console.log('editar');
  }

  // editar(updateBook: Biblioteca): Observable<Biblioteca>{
  //   console.log(updateBook) ;
  //   return this.http.put<Biblioteca>(this.url, updateBook);
  // }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Erro:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `${error.error}`);
    }
    return throwError(
      'Sem conexão. Tente novamente mais tarde.:');
  };
}
