import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../../usuario/authenticator.service';

@Component({
  selector: 'usam-header-aluno',
  templateUrl: './header-aluno.component.html',
  styleUrls: ['./header-aluno.component.css']
})
export class HeaderAlunoComponent implements OnInit {

  constructor(public authenticatorService: AuthenticatorService) { }

  ngOnInit() {
  }

}
