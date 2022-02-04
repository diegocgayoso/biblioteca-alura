import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovolivroComponent } from './novolivro/novolivro.component';
import { LivrosComponent } from './livros/livros.component';

@NgModule({
  declarations: [
    AppComponent,
    NovolivroComponent,
    LivrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
