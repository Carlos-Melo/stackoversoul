import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessRoutingModule } from './acess-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';


@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    AcessRoutingModule,
    ReactiveFormsModule,
    VmessageModule
  ]
})
export class AcessModule { }
