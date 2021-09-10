import { CursosService } from './../core/cursos/cursos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  public curso: any;

  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.curso = this.cursosService.getCurso(params['id']);
      this.checkForNotFound(this.curso);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private checkForNotFound(curso: any): void {
    if (curso == null) {
      this.router.navigate(['not-found']);
    }
  }
}
