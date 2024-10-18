import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },

  {
    path: "login",
    loadChildren: () =>
      import("../app/modules/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("../app/modules/register/register.module").then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("../app/modules/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
];
