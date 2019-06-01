import { Situacao } from './situacao.model';
import { SituacaoService } from './situacao.service';

export class AlunoComponent {

  situacao: Situacao;

  constructor(private disciplinaService: SituacaoService) {

  }

}
