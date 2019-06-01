import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Disciplina} from '../../../disciplina/disciplina.model'
import {DisciplinaService} from '../../../disciplina/disciplina.service';

@Component({
  selector: 'usam-cadastrar-disciplina',
  templateUrl: './cadastrar-disciplina.component.html',
  styleUrls: ['./cadastrar-disciplina.component.css']
})
export class CadastrarDisciplinaComponent implements OnInit {

  CadastroDisiciplinaForm: FormGroup;
  mostrarMensagem: boolean = false

  constructor(private formBuilder: FormBuilder,private serviceDisciplina:DisciplinaService) {
    this.CadastroDisiciplinaForm = this.formBuilder.group({
      nome_disciplina: [{ value: null, disabled: false }, [Validators.required]],
      turno_disciplina: ['', Validators.required],
      curso_disciplina: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  
  salvarDisciplina(){
    let disciplina: Disciplina = {
      "id": null,
      "nome_disciplina": this.CadastroDisiciplinaForm.controls.nome_disciplina.value,
      "turno_disciplina": this.CadastroDisiciplinaForm.controls.turno_disciplina.value,
      "cursos_disciplina": this.CadastroDisiciplinaForm.controls.curso_disciplina.value,
    }
    this.serviceDisciplina.registraDisciplina(disciplina).subscribe(
      data =>{
        //console.log(data);
        //console.log("Disciplina cadastrada com sucesso.");
        this.mostrarMensagem = true
        this.CadastroDisiciplinaForm.reset();
      },
      err =>{
        //console.log("Erro ao cadastrar, veja o console para detalhes.");
        //console.log('Erro Gerado: ' + JSON.stringify(err));
      }
    );
  }

}
