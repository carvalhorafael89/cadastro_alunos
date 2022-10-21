import { Component, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { aluno } from 'src/aluno';
import { mockalunos } from 'src/mock-alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})

export class lista_alunos_class implements OnInit {

  lista_alunos = mockalunos;
  alunoselect?: aluno;

  constructor() { }

  ngOnInit(): void {
  }

  seleciona(lista_alunos: aluno): void
  {
    this.alunoselect = lista_alunos;
  }
}