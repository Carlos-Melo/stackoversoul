import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pergunta-modal',
  templateUrl: './pergunta-modal.component.html',
  styleUrls: ['./pergunta-modal.component.scss']
})
export class PerguntaModalComponent implements OnInit {

  @Input() acao: string;
  imageSrc: any;
  isImagemSelected: boolean = false;
  vMaxLimit: number = 0;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  onClose() {
    this.bsModalRef.hide();
  }

  onImageSelected(event): void {
    if(event.target.files && event.target.files[0]){
      const file:File = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
      this.isImagemSelected = true;
    }
  }

  onImageRemoved(): void {
    this.isImagemSelected = false;
  }

  maxLimit(event) {
    this.vMaxLimit = event.target.value.length;
  }

}
