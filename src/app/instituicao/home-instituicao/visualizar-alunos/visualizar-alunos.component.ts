import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../aluno/aluno.model';
import { AlunoService } from '../../../aluno/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'usam-visualizar-alunos',
  templateUrl: './visualizar-alunos.component.html',
  styleUrls: ['./visualizar-alunos.component.css']
})

export class VisualizarAlunosComponent implements OnInit {

  listAlunos: Aluno[];
  query: string;

  idAluno: number;
  alunoAlterar: Aluno;

  constructor(private alunoService: AlunoService, private router: Router) { }

  ngOnInit() {
    this.loadAlunos();
  }

  ngOnDestroy() {
    this.alunoService.aluno = this.alunoAlterar;
  }

  setIdAlunoDeletar(idAluno: number) {
    this.idAluno = idAluno;
  }

  loadAlunos() {
    this.alunoService.getAllAlunos().subscribe(
      data => this.listAlunos = data
    );
  }

  searchAlunos() {
    this.alunoService.getAllAlunosBySearch(this.query).subscribe(
      data => this.listAlunos = data
    );
  }

  deletarAluno() {
    //console.log(this.idAluno);
    this.alunoService.deleteAluno(this.idAluno).subscribe(
      data => {
        //console.log(data);
      },
      err => {
        //console.log('Erro gerado: ' + JSON.stringify(err));
        //console.log("Erro ao excluir, veja o console para detalhes.");
      },
      () => {
        //console.log('Sucesso');
        this.loadAlunos();
      }
    );
  }

  alterarAluno(idAluno: number) {
    for (const AlunoaBuscado of this.listAlunos) {
      if (AlunoaBuscado.id == idAluno) {
        this.alunoAlterar = AlunoaBuscado;
        break;
      }
    }
    //console.log(this.alunoAlterar);
    this.router.navigate(['/instituicao/alterar-aluno']);
  }
}
