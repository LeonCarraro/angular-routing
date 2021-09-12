import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnDestroy, OnInit } from "@angular/core";

import { AlunosService } from "src/app/core/services/alunos/alunos.service";

@Component({
  selector: "app-aluno-detail",
  templateUrl: "./aluno-detail.component.html",
  styleUrls: ["./aluno-detail.component.scss"],
})
export class AlunoDetailComponent implements OnInit, OnDestroy {
  public aluno: any;

  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.aluno = this.alunosService.getAluno(params["id"]);
      this.checkForNotFound(this.aluno);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public editAluno(): void {
    this.router.navigate(["alunos", this.aluno.id, "edit"]);
  }

  private checkForNotFound(curso: any): void {
    if (curso == null) {
      this.router.navigate(["not-found"]);
    }
  }
}
