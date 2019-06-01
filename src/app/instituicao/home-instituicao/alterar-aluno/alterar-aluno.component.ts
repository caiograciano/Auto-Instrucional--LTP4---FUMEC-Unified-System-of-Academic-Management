import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlunoService } from 'src/app/aluno/aluno.service';
import { Aluno } from 'src/app/aluno/aluno.model';
import { Router } from '@angular/router';

@Component({
  selector: 'usam-alterar-aluno',
  templateUrl: './alterar-aluno.component.html',
  styleUrls: ['./alterar-aluno.component.css']
})
export class AlterarAlunoComponent implements OnInit {

  alterarAlunoForm: FormGroup;
  mostrarMensagem: boolean = false

  constructor(private router: Router, private formBuilder: FormBuilder, private alunoService: AlunoService) {

    this.alterarAlunoForm = this.formBuilder.group({
      ra_aluno: [{ value: '', disabled: true }, Validators.required],
      nome_aluno: ['', Validators.required],
      email_aluno: ['', Validators.required],
      telefonel_aluno: ['', Validators.required],
      telefone2_aluno: ['', Validators.required],
      endereco_aluno: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.alunoService.aluno !== undefined && this.alunoService.aluno !== null) {
      this.alterarAlunoForm.controls.nome_aluno.setValue(this.alunoService.aluno.nome_aluno);
      this.alterarAlunoForm.controls.ra_aluno.setValue(this.alunoService.aluno.ra_aluno);
      this.alterarAlunoForm.controls.email_aluno.setValue(this.alunoService.aluno.email_aluno);
      this.alterarAlunoForm.controls.telefonel_aluno.setValue(this.alunoService.aluno.telefone1_aluno);
      this.alterarAlunoForm.controls.telefone2_aluno.setValue(this.alunoService.aluno.telefone2_aluno);
      this.alterarAlunoForm.controls.endereco_aluno.setValue(this.alunoService.aluno.endereco_aluno);
      //console.log(this.alunoService.aluno);
    } else {
      this.router.navigate(['instituicao/visualizar-alunos']);
    }


  }

  ngOnDestroy() {
    this.alunoService.aluno = null;
  }

  salvarAluno() {
    let aluno: Aluno = {
      "id": this.alunoService.aluno.id,
      "ra_aluno": this.alunoService.aluno.ra_aluno,
      "nome_aluno": this.alterarAlunoForm.controls.nome_aluno.value,
      "email_aluno": this.alterarAlunoForm.controls.email_aluno.value,
      "telefone1_aluno": this.alterarAlunoForm.controls.telefonel_aluno.value,
      "telefone2_aluno": this.alterarAlunoForm.controls.telefone2_aluno.value,
      "endereco_aluno": this.alterarAlunoForm.controls.endereco_aluno.value,
      "disciplinasCursadas_aluno": this.alunoService.aluno.disciplinasCursadas_aluno
    }
    //console.log(aluno);

    this.alunoService.alterarAluno(aluno).subscribe(
      data => {
        //console.log(data);
        //console.log("Disciplina alterada com sucesso");
        this.mostrarMensagem = true
      },
      err => {
        //console.log("Erro ao alterar, veja o Console para detalhes.");
        //console.log('Erro gerado: ' + JSON.stringify(err));
      }
    );
  }

}
