import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CursosRoutingModule } from "./cursos.routing.module";
import { TableModule } from "primeng/table";

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [CommonModule, CursosRoutingModule, TableModule],
  exports: [],
  providers: [],
})
export class CursosModule {}
