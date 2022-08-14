import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { PerguntaModalComponent } from './components/pergunta-modal/pergunta-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PerguntaModalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    PerguntaModalComponent
  ],
  entryComponents: [PerguntaModalComponent]
})
export class SharedModule { }
