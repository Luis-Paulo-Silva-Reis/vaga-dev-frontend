import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardGridComponent } from "../../components/dashboard-grid/dashboard-grid.component";

const routes: Routes = [{ path: "", component: DashboardGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,],
})
export class DashboardRoutingModule {}
