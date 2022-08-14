import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerguntaRoutingModule } from './pergunta-routing.module';
import { PerguntaComponent } from './components/pergunta/pergunta.component';


@NgModule({
  declarations: [
    PerguntaComponent
  ],
  imports: [
    CommonModule,
    PerguntaRoutingModule
  ]
})
export class PerguntaModule { }
