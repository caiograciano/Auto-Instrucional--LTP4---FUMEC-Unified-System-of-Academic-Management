import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http'
import { FACELIST_API } from 'src/app/app.api';
import { Usuario } from './usuario.model';

@Injectable()
export class AuthenticatorService {

    public usuario: Usuario;
    public currentUser: Usuario;

    constructor(private httpClient: HttpClient) {
        this.currentUser = JSON.parse(sessionStorage.getItem('u'));
        if (this.currentUser == null)
            this.startUser();
    }

    public get getCurrentUser(): Usuario {
        this.currentUser.senha_usuario = null;
        return this.currentUser;
    }

    public startUser() {
        this.currentUser = {
            id: null,
            ra_usuario: null,
            nome_usuario: "Usuário Convidado",
            email_usuario: null,
            usuario_usuario: null,
            senha_usuario: null
        }
    }

    public registerPOST(usuario: Usuario): Observable<Usuario> {
        return this.httpClient.post<Usuario>(`${FACELIST_API}/usuarios`, usuario);
    }

    public register(usuario: Usuario) {
        this.registerPOST(usuario).subscribe(
            data => {
                this.currentUser = data;
                this.currentUser.senha_usuario = null;
                sessionStorage.setItem('u', JSON.stringify(this.currentUser));

                //console.log('Usuário registrado.');
            }
        );
    }

    public isLogged(): boolean {
        if (this.currentUser.id == null)
            return false;
        else
            return true;
    }

    public logout() {
        sessionStorage.removeItem('u');
        this.startUser();
    }

    getUsuarioByRA(ra: string): Observable<Usuario> {
        return this.httpClient.get<Usuario>(`${FACELIST_API}/usuarios?ra_usuario=${ra}`);
    }

    getUsuarioByUsuario(usuario: string): Observable<Usuario> {
        return this.httpClient.get<Usuario>(`${FACELIST_API}/usuarios?usuario_usuario=${usuario}`);
    }

    getUsuarioById(id: number): Observable<Usuario> {
        return this.httpClient.get<Usuario>(`${FACELIST_API}/usuarios?id=${id}`);
    }
}
