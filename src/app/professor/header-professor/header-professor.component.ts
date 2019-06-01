import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../../usuario/authenticator.service';

@Component({
  selector: 'usam-header-professor',
  templateUrl: './header-professor.component.html',
  styleUrls: ['./header-professor.component.css']
})
export class HeaderProfessorComponent implements OnInit {

  constructor(public authenticatorService: AuthenticatorService) { }

  ngOnInit() {
  }

}
