import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CursosService {
  constructor() {}

  public getCursos(): any[] {
    return [
      {
        id: 1,
        nome: "Java 11",
      },
      {
        id: 2,
        nome: "Angular",
      },
    ];
  }

  public getCurso(id: number): any {
    let curso = this.getCursos().filter((value) => value.id == id);
    return curso.length == 0 ? null : curso[0];
  }
}
