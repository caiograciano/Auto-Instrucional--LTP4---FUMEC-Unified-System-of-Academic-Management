import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Disciplina } from '../../../disciplina/disciplina.model'
import { DisciplinaService } from '../../../disciplina/disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'usam-alterar-disciplina',
  templateUrl: './alterar-disciplina.component.html',
  styleUrls: ['./alterar-disciplina.component.css']
})
export class AlterarDisciplinaComponent implements OnInit {

  alterarDisiciplinaForm: FormGroup;
  mostrarMensagem: boolean = false

  constructor(private router: Router, private formBuilder: FormBuilder, private disciplinaService: DisciplinaService) {
    this.alterarDisiciplinaForm = this.formBuilder.group({
      nome_disciplina: ['', [Validators.required]],
      turno_disciplina: ['', [Validators.required]],
      cursos_disciplina: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    if (this.disciplinaService.disciplina !== undefined && this.disciplinaService.disciplina !== null) {
      this.alterarDisiciplinaForm.controls.nome_disciplina.setValue(this.disciplinaService.disciplina.nome_disciplina);
      this.alterarDisiciplinaForm.controls.turno_disciplina.setValue(this.disciplinaService.disciplina.turno_disciplina);
      this.alterarDisiciplinaForm.controls.cursos_disciplina.setValue(this.disciplinaService.disciplina.cursos_disciplina);
      //console.log(this.disciplinaService.disciplina);
    }else {
      this.router.navigate(['/instituicao/visualizar-disciplinas']);
    }
  }

  ngOnDestroy() {
    this.disciplinaService.disciplina = null;
  }

  alterarDisciplina() {
    let disciplina: Disciplina = {
      "id": this.disciplinaService.disciplina.id,
      "nome_disciplina": this.alterarDisiciplinaForm.controls.nome_disciplina.value,
      "turno_disciplina": this.alterarDisiciplinaForm.controls.turno_disciplina.value,
      "cursos_disciplina": this.alterarDisiciplinaForm.controls.cursos_disciplina.value
    }
    //console.log(disciplina);

    this.disciplinaService.alterarDisciplina(disciplina).subscribe(
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