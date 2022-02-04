import { Component } from '@angular/core';
import { AddBooksService } from './services/addBooks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'biblioteca-angular';

  constructor(private serivce: AddBooksService){}

  adicionar($event: any){
    console.log($event);
    this.serivce.adicionar($event);
  }
}
