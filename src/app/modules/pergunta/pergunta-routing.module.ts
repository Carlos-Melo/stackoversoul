import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerguntaComponent } from './components/pergunta/pergunta.component';

const routes: Routes = [
  { path: '', component: PerguntaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerguntaRoutingModule { }
