import { Situacao } from './situacao.model';
import { FACELIST_API } from '../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SituacaoService {

    public situacao: Situacao;

    constructor(private http: HttpClient) { }

    getAllSituacoes(): Observable<Situacao[]> {
        return this.http.get<Situacao[]>(`${FACELIST_API}/situacoes`);
    }

    getAllSituacoesBySearch(query: string): Observable<Situacao[]> {
        return this.http.get<Situacao[]>(`${FACELIST_API}/situacoes?nome_situacao_like=${query}`);
    }

    getSituacoesByRa(raAluno: string): Observable<Situacao> {
        return this.http.get<Situacao>(`${FACELIST_API}/situacoes?raAluno_situacao=${raAluno}`);
    }

    getSituacoesById(id: number): Observable<Situacao> {
        return this.http.get<Situacao>(`${FACELIST_API}/situacoes/${id}`);
    }

    registraSituacoes(situacao: Situacao): Observable<Situacao> {
        return this.http.post<Situacao>(`${FACELIST_API}/situacoes`, situacao);
    }
}