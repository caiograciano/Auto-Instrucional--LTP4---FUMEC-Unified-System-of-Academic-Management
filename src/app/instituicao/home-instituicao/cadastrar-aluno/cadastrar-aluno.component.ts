import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlunoService } from '../../../aluno/aluno.service';
import { Aluno } from '../../../aluno/aluno.model';

@Component({
  selector: 'usam-cadastrar-aluno',
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.css']
})
export class CadastrarAlunoComponent implements OnInit {

  cadastroAlunoForm: FormGroup;
  mostrarMensagem: boolean = false

  constructor(private formBuilder: FormBuilder, private serviceAluno: AlunoService) {
    this.cadastroAlunoForm = this.formBuilder.group({
      ra_aluno: ['', [Validators.required]],
      nome_aluno: ['', Validators.required],
      email_aluno: ['', Validators.required],
      telefonel_aluno: ['', Validators.required],
      telefone2_aluno: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  salvarAluno() {
    let aluno: Aluno = {
      "id": null,
      "ra_aluno": this.cadastroAlunoForm.controls.ra_aluno.value,
      "nome_aluno": this.cadastroAlunoForm.controls.nome_aluno.value,
      "email_aluno": this.cadastroAlunoForm.controls.email_aluno.value,
      "telefone1_aluno": this.cadastroAlunoForm.controls.telefonel_aluno.value,
      "telefone2_aluno": this.cadastroAlunoForm.controls.telefone2_aluno.value,
      "endereco_aluno": null,
      "disciplinasCursadas_aluno": null
    }
    //console.log(aluno);

    this.serviceAluno.registraAluno(aluno).subscribe(
      data => {
        //console.log(data);
        //console.log("Professor cadastrado com sucesso.");
        this.mostrarMensagem = true
        this.cadastroAlunoForm.reset();
      },
      err => {
        //console.log("Erro ao salvar, veja o console para detalhes.");
        //console.log('Erro gerado: ' + JSON.stringify(err));
      }
    );
  }

}
