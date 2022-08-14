import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pergunta-modal',
  templateUrl: './pergunta-modal.component.html',
  styleUrls: ['./pergunta-modal.component.scss']
})
export class PerguntaModalComponent implements OnInit {

  @Input() acao: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  onClose() {
    this.bsModalRef.hide();
  }

}
