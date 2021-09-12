import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetailComponent } from "./aluno-detail/aluno-detail.component";

const routes: Routes = [
  {
    path: "alunos",
    component: AlunosComponent,
    children: [
      {
        path: "add",
        component: AlunoFormComponent,
      },
      {
        path: ":id",
        component: AlunoDetailComponent,
      },
      {
        path: ":id/edit",
        component: AlunoFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
