import { Component, OnInit } from '@angular/core';
import { Alunos } from 'src/mock-alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos = Alunos;

  constructor() { }

  ngOnInit(): void {
  }
}