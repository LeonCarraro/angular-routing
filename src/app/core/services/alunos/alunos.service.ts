import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AlunosService {
  private alunos: any[] = [
    {
      id: 1,
      nome: "Aluno 01",
      email: "aluno01@email.com",
    },
    {
      id: 2,
      nome: "Aluno 02",
      email: "aluno02@email.com",
    },
    {
      id: 3,
      nome: "Aluno 03",
      email: "aluno03@email.com",
    },
  ];

  constructor() {}

  public getAlunos(): any[] {
    return this.alunos;
  }

  public getAluno(id: number): any {
    let aluno = this.getAlunos().find((value) => value.id == id);
    return aluno == undefined ? null : aluno;
  }
}
