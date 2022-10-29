import { Component, OnInit } from '@angular/core';
import { aluno_int } from 'src/aluno';
import { mockalunos } from 'src/mock-alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})

export class AlunosComponent implements OnInit {

  lista_alunos = mockalunos;
  alunoselect?: aluno_int;

  constructor() { }

  ngOnInit(): void {
  }

  seleciona(lista_alunos: aluno_int): void
  {
    this.alunoselect = lista_alunos;
  }
}