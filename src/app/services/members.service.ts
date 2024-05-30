import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from '../models/members.model';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get<Member[]>(
      this.apiURL + 'users',
    );
  }

  getMember(userName: string) {
    return this.http.get<Member>(
      this.apiURL + 'users/' + userName,
    );
  }
}
