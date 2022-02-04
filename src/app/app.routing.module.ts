import { NovolivroComponent } from './novolivro/novolivro.component';
import { LivrosComponent } from './livros/livros.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

export const routes: Routes = [

  {path: '', redirectTo:'livros', pathMatch:'full'},
  {path: 'livros', component: LivrosComponent},
  {path: 'novoLivro', component: NovolivroComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
