import { Routes } from '@angular/router';

import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';

import { InstituicaoComponent } from './instituicao/instituicao.component';
import { CadastrarDisciplinaComponent } from './instituicao/home-instituicao/cadastrar-disciplina/cadastrar-disciplina.component';
import { CadastrarProfessorComponent } from './instituicao/home-instituicao/cadastrar-professor/cadastrar-professor.component';
import { CadastrarAlunoComponent } from './instituicao/home-instituicao/cadastrar-aluno/cadastrar-aluno.component';
import { AlterarDisciplinaComponent } from './instituicao/home-instituicao/alterar-disciplina/alterar-disciplina.component';
import { AlterarProfessorComponent } from './instituicao/home-instituicao/alterar-professor/alterar-professor.component';
import { AlterarAlunoComponent } from './instituicao/home-instituicao/alterar-aluno/alterar-aluno.component';
import { VisualizarDisciplinasComponent } from './instituicao/home-instituicao/visualizar-disciplinas/visualizar-disciplinas.component';
import { VisualizarProfessoresComponent } from './instituicao/home-instituicao/visualizar-professores/visualizar-professores.component';
import { VisualizarAlunosComponent } from './instituicao/home-instituicao/visualizar-alunos/visualizar-alunos.component';

import { ProfessorComponent } from './professor/professor.component';
import { QuadroAvisosComponent as QuadroAvisosComponentProfessor } from './professor/home-professor/quadro-avisos/quadro-avisos.component';
import { GerenciamentoFaltasComponent } from './professor/home-professor/gerenciamento-faltas/gerenciamento-faltas.component';
import { GerenciamentoNotasComponent } from './professor/home-professor/gerenciamento-notas/gerenciamento-notas.component';
import { CronogramaAcademicoComponent as CronogramaAcademicoComponentProfessor } from './professor/home-professor/cronograma-academico/cronograma-academico.component';

import { AlunoComponent } from './aluno/aluno.component';
import { QuadroAvisosComponent as QuadroAvisosComponentAluno } from './aluno/home-aluno/quadro-avisos/quadro-avisos.component';
import { DisciplinasMatriculadasComponent } from './aluno/home-aluno/disciplinas-matriculadas/disciplinas-matriculadas.component';
import { CronogramaAcademicoComponent as CronogramaAcademicoComponentAluno } from './aluno/home-aluno/cronograma-academico/cronograma-academico.component';
import { OnlyLoggedInUsersGuard } from './usuario/OnlyLoggedInUsersGuard';
import { AlwaysAuthGuard } from './usuario/AlwaysAuthGuard';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'instituicao', component: InstituicaoComponent,
        canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
        children: [
            { path: 'cadastrar-disciplina', component: CadastrarDisciplinaComponent },
            { path: 'cadastrar-professor', component: CadastrarProfessorComponent },
            { path: 'cadastrar-aluno', component: CadastrarAlunoComponent },
            { path: 'alterar-disciplina', component: AlterarDisciplinaComponent },
            { path: 'alterar-professor', component: AlterarProfessorComponent },
            { path: 'alterar-aluno', component: AlterarAlunoComponent },
            { path: 'visualizar-disciplinas', component: VisualizarDisciplinasComponent },
            { path: 'visualizar-professores', component: VisualizarProfessoresComponent },
            { path: 'visualizar-alunos', component: VisualizarAlunosComponent }
        ]
    },
    {
        path: 'professor', component: ProfessorComponent,
        canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
        children: [
            { path: 'quadro-avisos', component: QuadroAvisosComponentProfessor },
            { path: 'gerenciamento-faltas', component: GerenciamentoFaltasComponent },
            { path: 'gerenciamento-notas', component: GerenciamentoNotasComponent },
            { path: 'cronograma-academico', component: CronogramaAcademicoComponentProfessor }
        ]
    },
    {
        path: 'aluno', component: AlunoComponent,
        canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
        children: [
            { path: 'quadro-avisos', component: QuadroAvisosComponentAluno },
            { path: 'disciplinas-matriculadas', component: DisciplinasMatriculadasComponent },
            { path: 'cronograma-academico', component: CronogramaAcademicoComponentAluno }
        ]
    },
    { path: '**', redirectTo: 'login' }
]