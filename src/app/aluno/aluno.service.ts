import { Aluno } from './aluno.model';
import { FACELIST_API } from '../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AlunoService {

    public aluno: Aluno;

    constructor(private http: HttpClient) { }

    getAllAlunos(): Observable<Aluno[]> {
        return this.http.get<Aluno[]>(`${FACELIST_API}/alunos`);
    }

    getAllAlunosBySearch(query: string): Observable<Aluno[]> {
        return this.http.get<Aluno[]>(`${FACELIST_API}/alunos?nome_aluno_like=${query}`);
    }

    getAlunoByRA(ra: string): Observable<Aluno> {
        return this.http.get<Aluno>(`${FACELIST_API}/alunos?ra_aluno=${ra}`);
    }

    getAlunoById(id: number): Observable<Aluno> {
        return this.http.get<Aluno>(`${FACELIST_API}/alunos?id=${id}`);
    }

    registraAluno(aluno: Aluno): Observable<Aluno> {
        return this.http.post<Aluno>(`${FACELIST_API}/alunos`, aluno);
    }

    deleteAluno(id:number): Observable<Aluno> {
        return this.http.delete<Aluno>(`${FACELIST_API}/alunos/${id}`);
    }

    alterarAluno(aluno: Aluno): Observable<Aluno> {
        return this.http.put<Aluno>(`${FACELIST_API}/alunos/${aluno.id}`,aluno);
    }

}