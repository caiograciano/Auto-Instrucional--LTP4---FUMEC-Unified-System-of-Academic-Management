import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../professor/professor.model';
import { ProfessorService } from '../../../professor/professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'usam-visualizar-professores',
  templateUrl: './visualizar-professores.component.html',
  styleUrls: ['./visualizar-professores.component.css']
})
export class VisualizarProfessoresComponent implements OnInit {

  listProfessores: Professor[];
  query: string;

  idProfessor: number;
  professorAlterar: Professor;

  constructor(private professorService: ProfessorService, private router: Router) { }

  ngOnInit() {
    this.loadProfessores();
  }

  ngOnDestroy() {
    this.professorService.professor = this.professorAlterar;
  }

  setIdProfessorDeletar(idProfessor: number) {
    this.idProfessor = idProfessor;
  }

  loadProfessores() {
    this.professorService.getAllProfessores().subscribe(
      data => this.listProfessores = data
    );
  }

  searchProfessores() {
    this.professorService.getAllProfessoresBySearch(this.query).subscribe(
      data => this.listProfessores = data
    );
  }

  deletarProfessor() {
    //console.log(this.idProfessor);
    this.professorService.deleteProfessor(this.idProfessor).subscribe(
      data => {
        //console.log(data);
      },
      err => {
        //console.log('Erro gerado: ' + JSON.stringify(err));
        //console.log("Erro ao excluir, veja o console para detalhes.");
      },
      () => {
        //console.log('Sucesso.');
        this.loadProfessores();
      }
    );

  }

  alterarProfessor(idProfessor: number) {
    for (const professorBuscado of this.listProfessores) {
      if (professorBuscado.id == idProfessor) {
        this.professorAlterar = professorBuscado;
        break;
      }
    }
    this.router.navigate(['/instituicao/alterar-professor']);
  }
}
