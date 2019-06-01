import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Professor } from '../../../professor/professor.model';
import { ProfessorService } from '../../../professor/professor.service';

@Component({
  selector: 'usam-cadastrar-professor',
  templateUrl: './cadastrar-professor.component.html',
  styleUrls: ['./cadastrar-professor.component.css']
})
export class CadastrarProfessorComponent implements OnInit {

  cadastroProfessorForm: FormGroup;
  mostrarMensagem: boolean = false

  constructor(private formBuilder: FormBuilder, private serviceProfessor: ProfessorService) {
    this.cadastroProfessorForm = this.formBuilder.group({
      ra_professor: ['', [Validators.required]],
      nome_professor: ['', Validators.required],
      email_professor: ['', Validators.required],
      telefonel_professor: ['', Validators.required],
      telefone2_professor: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  salvarProfessor() {
    let professor: Professor = {
      "id": null,
      "ra_professor": this.cadastroProfessorForm.controls.ra_professor.value,
      "nome_professor": this.cadastroProfessorForm.controls.nome_professor.value,
      "email_professor": this.cadastroProfessorForm.controls.email_professor.value,
      "telefone1_professor": this.cadastroProfessorForm.controls.telefonel_professor.value,
      "telefone2_professor": this.cadastroProfessorForm.controls.telefone2_professor.value,
      "endereco_professor": null,
      "disciplinasLecionadas_professor": null
    }
    //console.log(professor);

    this.serviceProfessor.registraProfessor(professor).subscribe(
      data => {
        //console.log(data);
        //console.log("Professor cadastrado com sucesso.");
        this.mostrarMensagem = true
        this.cadastroProfessorForm.reset();
      },
      err => {
        //console.log("Erro ao salvar, veja o console para detalhes.");
        //console.log('Erro gerado: ' + JSON.stringify(err));
      }
    );
  }
}
