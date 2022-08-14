import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntaModalComponent } from './pergunta-modal.component';

describe('PerguntaModalComponent', () => {
  let component: PerguntaModalComponent;
  let fixture: ComponentFixture<PerguntaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerguntaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerguntaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
