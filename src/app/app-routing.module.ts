import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { NotFoundComponent } from "./pages/errors/not-found/not-found.component";

const routes: Routes = [
  {
    path: "cursos",
    loadChildren: () =>
      import("./pages/cursos/cursos.module").then(
        (module) => module.CursosModule
      ),
  },
  {
    path: "alunos",
    loadChildren: () =>
      import("./pages/alunos/alunos.module").then(
        (module) => module.AlunosModule
      ),
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "not-found",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
