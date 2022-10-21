import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlunosEditComponent } from './listar-alunos-edit.component';

describe('ListarAlunosEditComponent', () => {
  let component: ListarAlunosEditComponent;
  let fixture: ComponentFixture<ListarAlunosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAlunosEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAlunosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
