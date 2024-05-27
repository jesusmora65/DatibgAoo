import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.css',
})
export class TestErrorComponent {
  apiURL = 'https://localhost:7212/api/';
  validationErrors: string[] = [];

  constructor(private http: HttpClient) {}

  get404Error() {
    this.http.get(this.apiURL + 'buggy/mot-found').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  get400Error() {
    this.http.get(this.apiURL + 'buggy/bad-request').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  get500Error() {
    this.http.get(this.apiURL + 'buggy/server-error').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  get401Error() {
    this.http.get(this.apiURL + 'buggy/auth').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  get400ValidationError() {
    this.http.get(this.apiURL + 'accounts/register').subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        this.validationErrors = error;
      },
    });
  }
}
