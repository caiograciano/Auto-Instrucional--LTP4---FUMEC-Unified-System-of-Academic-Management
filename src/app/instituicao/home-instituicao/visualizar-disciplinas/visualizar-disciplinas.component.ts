import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../../disciplina/disciplina.model';
import { DisciplinaService } from '../../../disciplina/disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'usam-visualizar-disciplinas',
  templateUrl: './visualizar-disciplinas.component.html',
  styleUrls: ['./visualizar-disciplinas.component.css']
})
export class VisualizarDisciplinasComponent implements OnInit {

  listDisciplinas: Disciplina[];
  query: string;

  idDisciplinaDeletar: number;
  disciplinaAlterar: Disciplina;

  constructor(private disciplinaService: DisciplinaService, private router: Router) { }

  ngOnInit() {
    this.loadDisciplinas();
  }

  ngOnDestroy() {
    this.disciplinaService.disciplina = this.disciplinaAlterar;
  }

  setIdDisciplinaDeletar(idDisciplinaDeletar: number) {
    this.idDisciplinaDeletar = idDisciplinaDeletar;
  }

  loadDisciplinas() {
    this.disciplinaService.getAllDisciplinas().subscribe(
      data => this.listDisciplinas = data
    );
  }

  searchDisciplinas() {
    this.disciplinaService.getAllDisciplinasBySearch(this.query).subscribe(
      data => this.listDisciplinas = data
    );
  }

  deletarDisciplina() {
    this.disciplinaService.deleteDisciplina(this.idDisciplinaDeletar).subscribe(
      data => {
        //console.log(data);
      },
      err => {
        //console.log('Erro gerado: ' + JSON.stringify(err));
        //console.log("Erro ao excluir, veja o console para detalhes.");
      },
      () => {
        this.loadDisciplinas();
      }
    );
  }

  alterarDisciplina(idDisciplina: number) {
    for (const disciplinaBuscada of this.listDisciplinas) {
      if (disciplinaBuscada.id == idDisciplina) {
        this.disciplinaAlterar = disciplinaBuscada;
        break;
      }
    }
    this.router.navigate(['/instituicao/alterar-disciplina']);
  }
}
