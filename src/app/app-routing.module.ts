import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';

import { RodapeComponent } from './rodape/rodape.component';
import { PaginaComponent } from './pagina/pagina.component';

const routes: Routes = [
  {path: '', component: PaginaComponent},
  {path:'rodape', component: RodapeComponent},
  {path:'contato', component: ContatoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
