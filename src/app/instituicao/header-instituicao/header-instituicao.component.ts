import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../../usuario/authenticator.service';

@Component({
  selector: 'usam-header-instituicao',
  templateUrl: './header-instituicao.component.html',
  styleUrls: ['./header-instituicao.component.css']
})
export class HeaderInstituicaoComponent implements OnInit {

  constructor(public authenticatorService: AuthenticatorService) { }

  ngOnInit() {
  }

}
