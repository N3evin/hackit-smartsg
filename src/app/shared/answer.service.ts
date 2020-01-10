import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private requestUrl = "https://j0vbqasfb0.execute-api.ap-southeast-1.amazonaws.com/Dev/answer";

  constructor(
    private http: HttpClient
  ) { }

  submitAnswer(payload) {
    return this.http.post(this.requestUrl, payload);
  }
}
