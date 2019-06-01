import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Usuario } from '../../usuario/usuario.model';
import { AuthenticatorService } from '../../usuario/authenticator.service';

@Component({
  selector: 'usam-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private authenticatorService: AuthenticatorService) { }

  ngOnInit() {
    onEnterKey();
  }

  formGroupLogin = this.formBuilder.group({
    usuario: [''],
    senha: ['']
  });

  loginErro: boolean;
  usuarioRegistred: Usuario;

  private get usuario(): string { return this.formGroupLogin.controls.usuario.value; }
  private get senha(): string { return this.formGroupLogin.controls.senha.value; }

  logar() {
    this.authenticatorService.getUsuarioByUsuario(this.usuario).subscribe(
      data => this.usuarioRegistred = data,
      err => { },
      () => {
        if (this.usuarioRegistred == undefined || Object.keys(this.usuarioRegistred).length == 0) {
          this.loginErro = true;
          //console.log("Usuário não existe.");
        } else {
          if (this.usuarioRegistred[0].senha_usuario !== this.senha) {
            this.loginErro = true;
            //console.log("Senha inválida.");

          } else {
            //console.log("Logado.");

            this.authenticatorService.currentUser = this.usuarioRegistred[0];
            //console.log(this.authenticatorService.currentUser);

            if (this.authenticatorService.currentUser.ra_usuario[0] === 'I')
              this.router.navigate(['/instituicao']);
            else if (this.authenticatorService.currentUser.ra_usuario[0] === 'P')
              this.router.navigate(['/professor']);
            else if (this.authenticatorService.currentUser.ra_usuario[0] === 'A')
              this.router.navigate(['/aluno']);
          }

        }
      }
    );
  }

}


// -- Javascript- -
function onEnterKey() {
  var inputUsuario = document.getElementById("txt-usuario");
  var inputSenha = document.getElementById("txt-senha");

  inputUsuario.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("btn-logar").click();
    }
  });

  inputSenha.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("btn-logar").click();
    }
  });
}

