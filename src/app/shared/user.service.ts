import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private requestUrl = "https://j0vbqasfb0.execute-api.ap-southeast-1.amazonaws.com/Dev/user";
  private createRequestUrl = "https://j0vbqasfb0.execute-api.ap-southeast-1.amazonaws.com/Dev/createuser";

  constructor(
    private http: HttpClient
  ) { }

  getUser(uuid) {
    return this.http.get(this.requestUrl + '?uuid=' + uuid);
  }

  createUser() {
    return this.http.post(this.createRequestUrl, '');
  }
}
