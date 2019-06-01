import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../../disciplina/disciplina.model';
import { DisciplinaService } from '../../../disciplina/disciplina.service';
import { Situacao } from '../../../situacao/situacao.model';
import { SituacaoService } from '../../../situacao/situacao.service';
import { AuthenticatorService } from '../../../usuario/authenticator.service';

@Component({
  selector: 'usam-disciplinas-matriculadas',
  templateUrl: './disciplinas-matriculadas.component.html',
  styleUrls: ['./disciplinas-matriculadas.component.css']
})
export class DisciplinasMatriculadasComponent implements OnInit {

  listDisciplinas: Disciplina[];
  situacao: Situacao;

  constructor(private authenticatorService: AuthenticatorService, private disciplinaService: DisciplinaService, private situacaoService: SituacaoService) { }

  ngOnInit() {
    this.loadSituacao();
  }

  loadDisciplinas(nomeDisciplina: string) {
    this.disciplinaService.getAllDisciplinasBySearch(nomeDisciplina).subscribe(
      data => this.listDisciplinas = data
    );
  }

  loadSituacao() {
    this.situacaoService.getSituacoesByRa(this.authenticatorService.currentUser.ra_usuario).subscribe(
      data => this.situacao = data,
      err => { },
      () => {
        this.situacao = this.situacao[0];

        if (this.situacao !== undefined && Object.keys(this.situacao).length !== 0)
          this.loadDisciplinas(this.situacao.nomeDisciplina_situacao);
      }
    );
  }

}
