import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'biblioteca-angular';

  titulo: string = '';
  autor: string = '';
  descricao: string = '';

  dadosLivrosAdd: any = [] = [];

  adicionar($event: any){
    console.log($event);

    const livroInfos = {...$event, data: new Date()}
    this.dadosLivrosAdd.push(livroInfos);
  }
}
