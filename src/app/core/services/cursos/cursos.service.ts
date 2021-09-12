import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CursosService {
  private cursos: any[] = [
    {
      id: 1,
      nome: "Java 11",
    },
    {
      id: 2,
      nome: "Angular",
    },
  ];

  constructor() {}

  public getCursos(): any[] {
    return this.cursos;
  }

  public getCurso(id: number): any {
    let curso = this.getCursos().find((value) => value.id == id);
    return curso == undefined ? null : curso;
  }
}
