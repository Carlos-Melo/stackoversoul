import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PerguntaModalComponent } from 'src/app/shared/components/pergunta-modal/pergunta-modal.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(pAcao: string) {
    this.bsModalRef = this.modalService.show(PerguntaModalComponent);
    this.bsModalRef.content.acao = pAcao;
  }

}
