import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../../disciplina/disciplina.model';
import { DisciplinaService } from '../../../disciplina/disciplina.service';
import { Situacao } from '../../../situacao/situacao.model';
import { SituacaoService } from '../../../situacao/situacao.service';

@Component({
  selector: 'usam-gerenciamento-faltas',
  templateUrl: './gerenciamento-faltas.component.html',
  styleUrls: ['./gerenciamento-faltas.component.css']
})
export class GerenciamentoFaltasComponent implements OnInit {

  listDisciplinas: Disciplina[];
  listSituacoes: Situacao[];

  constructor(private disciplinaService: DisciplinaService, private situacaoService: SituacaoService) { }

  ngOnInit() {
    this.loadDisciplinas();
    this.loadSituacoes();
  }

  loadDisciplinas() {
    this.disciplinaService.getAllDisciplinas().subscribe(
      data => this.listDisciplinas = data
    );
  }

  loadSituacoes() {
    this.situacaoService.getAllSituacoes().subscribe(
      data => this.listSituacoes = data
    );
  }
}
