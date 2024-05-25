import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiURL = 'https://localhost:7212/api/';
  private currentUser = new BehaviorSubject<User>(null);
  currentUser$ = this.currentUser.asObservable();

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post<User>(this.apiURL + 'accounts/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.next(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post<User>(this.apiURL + 'accounts/register', model).pipe(
      map((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.next(user);
      })
    );
  }

  setCurrentUser(user: User) {
    this.currentUser.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.next(null);
  }
}
