import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';

import { InstituicaoComponent } from './instituicao/instituicao.component';
import { HeaderInstituicaoComponent } from './instituicao/header-instituicao/header-instituicao.component';
import { HomeInstituicaoComponent } from './instituicao/home-instituicao/home-instituicao.component';
import { MenuInstituicaoComponent } from './instituicao/menu-instituicao/menu-instituicao.component';
import { AlterarDisciplinaComponent } from './instituicao/home-instituicao/alterar-disciplina/alterar-disciplina.component';
import { AlterarProfessorComponent } from './instituicao/home-instituicao/alterar-professor/alterar-professor.component';
import { AlterarAlunoComponent } from './instituicao/home-instituicao/alterar-aluno/alterar-aluno.component';
import { CadastrarDisciplinaComponent } from './instituicao/home-instituicao/cadastrar-disciplina/cadastrar-disciplina.component';
import { CadastrarProfessorComponent } from './instituicao/home-instituicao/cadastrar-professor/cadastrar-professor.component';
import { CadastrarAlunoComponent } from './instituicao/home-instituicao/cadastrar-aluno/cadastrar-aluno.component';
import { VisualizarDisciplinasComponent } from './instituicao/home-instituicao/visualizar-disciplinas/visualizar-disciplinas.component';
import { VisualizarProfessoresComponent } from './instituicao/home-instituicao/visualizar-professores/visualizar-professores.component';
import { VisualizarAlunosComponent } from './instituicao/home-instituicao/visualizar-alunos/visualizar-alunos.component';

import { ProfessorComponent } from './professor/professor.component';
import { HeaderProfessorComponent } from './professor/header-professor/header-professor.component';
import { HomeProfessorComponent } from './professor/home-professor/home-professor.component';
import { MenuProfessorComponent } from './professor/menu-professor/menu-professor.component';
import { QuadroAvisosComponent as QuadroAvisosComponentProfessor } from './professor/home-professor/quadro-avisos/quadro-avisos.component';
import { GerenciamentoFaltasComponent } from './professor/home-professor/gerenciamento-faltas/gerenciamento-faltas.component';
import { GerenciamentoNotasComponent } from './professor/home-professor/gerenciamento-notas/gerenciamento-notas.component';
import { CronogramaAcademicoComponent as CronogramaAcademicoComponentProfessor } from './professor/home-professor/cronograma-academico/cronograma-academico.component';

import { AlunoComponent } from './aluno/aluno.component';
import { HeaderAlunoComponent } from './aluno/header-aluno/header-aluno.component';
import { HomeAlunoComponent } from './aluno/home-aluno/home-aluno.component';
import { MenuAlunoComponent } from './aluno/menu-aluno/menu-aluno.component';
import { QuadroAvisosComponent as QuadroAvisosComponentAluno } from './aluno/home-aluno/quadro-avisos/quadro-avisos.component';
import { DisciplinasMatriculadasComponent } from './aluno/home-aluno/disciplinas-matriculadas/disciplinas-matriculadas.component';
import { CronogramaAcademicoComponent as CronogramaAcademicoComponentAluno } from './aluno/home-aluno/cronograma-academico/cronograma-academico.component';

import { InstituicaoService } from './instituicao/instituicao.service';
import { DisciplinaService } from './disciplina/disciplina.service';
import { ProfessorService } from './professor/professor.service';
import { AlunoService } from './aluno/aluno.service';
import { SituacaoService } from './situacao/situacao.service';
import { AuthenticatorService } from './usuario/authenticator.service';
import { OnlyLoggedInUsersGuard } from './usuario/OnlyLoggedInUsersGuard';
import { AlwaysAuthGuard } from './usuario/AlwaysAuthGuard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,

    InstituicaoComponent,
    HeaderInstituicaoComponent,
    HomeInstituicaoComponent,
    MenuInstituicaoComponent,
    AlterarDisciplinaComponent,
    AlterarProfessorComponent,
    AlterarAlunoComponent,
    CadastrarDisciplinaComponent,
    CadastrarProfessorComponent,
    CadastrarAlunoComponent,
    VisualizarDisciplinasComponent,
    VisualizarProfessoresComponent,
    VisualizarAlunosComponent,

    ProfessorComponent,
    HeaderProfessorComponent,
    HomeProfessorComponent,
    MenuProfessorComponent,
    QuadroAvisosComponentProfessor,
    GerenciamentoFaltasComponent,
    GerenciamentoNotasComponent,
    CronogramaAcademicoComponentProfessor,

    AlunoComponent,
    HeaderAlunoComponent,
    HomeAlunoComponent,
    MenuAlunoComponent,
    QuadroAvisosComponentAluno,
    DisciplinasMatriculadasComponent,
    CronogramaAcademicoComponentAluno
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    InstituicaoService,
    DisciplinaService,
    ProfessorService,
    AlunoService,
    SituacaoService,
    AuthenticatorService,
    OnlyLoggedInUsersGuard,
    AlwaysAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
