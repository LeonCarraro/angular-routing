import { Component, OnInit } from "@angular/core";

import { MenuItem } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: "Home",
        routerLink: "/home",
        routerLinkActiveOptions: {
          exact: true,
        },
      },
      {
        label: "Login",
        routerLink: "/login",
        routerLinkActiveOptions: {
          exact: true,
        },
      },
      {
        label: "Cursos",
        routerLink: "/cursos",
        routerLinkActiveOptions: {
          exact: false,
        },
      },
    ];
  }
}
