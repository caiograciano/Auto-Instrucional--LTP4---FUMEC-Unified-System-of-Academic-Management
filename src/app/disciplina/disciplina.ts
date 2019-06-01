import { Disciplina } from './disciplina.model';
import { DisciplinaService } from './disciplina.service';

export class AlunoComponent {

  disciplina: Disciplina;

  constructor(private disciplinaService: DisciplinaService) {

  }

}
