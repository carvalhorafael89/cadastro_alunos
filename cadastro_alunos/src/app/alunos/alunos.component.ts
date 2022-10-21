import { Component, OnInit } from '@angular/core';
import { mockalunos } from 'src/mock-alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class lista_alunos implements OnInit {

  lista_alunos = mockalunos;

  constructor() { }

  ngOnInit(): void {
  }
}