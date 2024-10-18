import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "https://reqres.in/api/login";

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, credentials, { observe: "response" })
      .pipe(
        tap((response) => {
          if (response.status === 200) {
            this.router.navigate(["/dashboard"]);
          }
        }),
        map((response) => response.body),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error("An error occurred:", error.message);
    return throwError("Something went wrong; please try again later.");
  }
}
