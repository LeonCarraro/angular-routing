import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunosRoutingModule } from "./alunos-routing.module";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetailComponent } from "./aluno-detail/aluno-detail.component";

@NgModule({
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetailComponent],
  imports: [CommonModule, AlunosRoutingModule, TableModule, ButtonModule],
  exports: [],
  providers: [],
})
export class AlunosModule {}
