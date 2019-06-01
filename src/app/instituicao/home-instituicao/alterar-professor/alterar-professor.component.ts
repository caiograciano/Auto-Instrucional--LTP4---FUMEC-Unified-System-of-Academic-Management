import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Professor } from '../../../professor/professor.model'
import { ProfessorService } from '../../../professor/professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'usam-alterar-professor',
  templateUrl: './alterar-professor.component.html',
  styleUrls: ['./alterar-professor.component.css']
})
export class AlterarProfessorComponent implements OnInit {

  alterarProfessorForm: FormGroup;
  mostrarMensagem: boolean = false

  constructor(private router: Router,private formBuilder: FormBuilder, private serviceProfessor: ProfessorService) {
    this.alterarProfessorForm = this.formBuilder.group({
      ra_professor: [{ value: '', disabled: true }, Validators.required],
      nome_professor: ['', Validators.required],
      email_professor: ['', Validators.required],
      telefonel_professor: ['', Validators.required],
      telefone2_professor: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.serviceProfessor.professor !== undefined && this.serviceProfessor.professor !== null) {
      this.alterarProfessorForm.controls.ra_professor.setValue(this.serviceProfessor.professor.ra_professor);
      this.alterarProfessorForm.controls.nome_professor.setValue(this.serviceProfessor.professor.nome_professor);
      this.alterarProfessorForm.controls.email_professor.setValue(this.serviceProfessor.professor.email_professor);
      this.alterarProfessorForm.controls.telefonel_professor.setValue(this.serviceProfessor.professor.telefone1_professor);
      this.alterarProfessorForm.controls.telefone2_professor.setValue(this.serviceProfessor.professor.telefone2_professor);
      //console.log(this.serviceProfessor.professor);
    }else {
      this.router.navigate(['/instituicao/visualizar-professores']);
    }
  }

  ngOnDestroy() {
    this.serviceProfessor.professor = null;
  }

  alterarProfessor() {
    let professor: Professor = {
      "id": this.serviceProfessor.professor.id,
      "ra_professor": this.serviceProfessor.professor.ra_professor,
      "nome_professor": this.alterarProfessorForm.controls.nome_professor.value,
      "email_professor": this.alterarProfessorForm.controls.email_professor.value,
      "telefone1_professor": this.alterarProfessorForm.controls.telefonel_professor.value,
      "telefone2_professor": this.alterarProfessorForm.controls.telefone2_professor.value,
      "endereco_professor": this.serviceProfessor.professor.endereco_professor,
      "disciplinasLecionadas_professor": this.serviceProfessor.professor.disciplinasLecionadas_professor
    }
    //console.log(professor);

    this.serviceProfessor.alterarProfessor(professor).subscribe(
      data => {
        //console.log(data);
        //console.log("Professor alterado com sucesso.");
        this.mostrarMensagem = true 
      },
      err => {
        //console.log("Erro ao alterar, veja o console para detalhes.");
        //console.log('Erro gerado: ' + JSON.stringify(err));
      }
    );
  }

}
