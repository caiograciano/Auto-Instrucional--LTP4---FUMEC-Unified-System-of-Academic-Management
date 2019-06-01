import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno.model';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'usam-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno: Aluno;

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
  }

}
