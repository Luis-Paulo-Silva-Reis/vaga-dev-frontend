import { NgModule } from "@angular/core";
import { LoginComponent } from "../../components/login/login.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import { AuthService } from "../../services/auth.service";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
})
export class LoginModule {}
