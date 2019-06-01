import { Professor } from './professor.model';
import { FACELIST_API } from '../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProfessorService {

    public professor: Professor;

    constructor(private http: HttpClient) { }

    getAllProfessores(): Observable<Professor[]> {
        return this.http.get<Professor[]>(`${FACELIST_API}/professores`);
    }

    getAllProfessoresBySearch(query: string): Observable<Professor[]> {
        return this.http.get<Professor[]>(`${FACELIST_API}/professores?nome_professor_like=${query}`);
    }

    getProfessorByRA(ra: string): Observable<Professor> {
        return this.http.get<Professor>(`${FACELIST_API}/professores?ra_professor=${ra}`);
    }

    getProfessorById(id: number): Observable<Professor> {
        return this.http.get<Professor>(`${FACELIST_API}/professores?id=${id}`);
    }

    registraProfessor(professor: Professor): Observable<Professor> {
        return this.http.post<Professor>(`${FACELIST_API}/professores`, professor);
    }

    deleteProfessor(id:number): Observable<Professor> {
        return this.http.delete<Professor>(`${FACELIST_API}/professores/${id}`);
    }

    alterarProfessor(professor: Professor): Observable<Professor> {
        return this.http.put<Professor>(`${FACELIST_API}/professores/${professor.id}`,professor);
    }
    
}