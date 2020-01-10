import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private requestUrl = "https://j0vbqasfb0.execute-api.ap-southeast-1.amazonaws.com/Dev/questions";


  constructor(
    private http: HttpClient
  ) { }

  getQuestions(uuid, limit, page) {
    return this.http.get(this.requestUrl + '?limit=' + limit + '&uuid=' + uuid + '&page=' + page);
  }
}
