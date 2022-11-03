import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class QuizService {

  constructor(private http: HttpClient) {
  }

  randomQuiz() {
    return this.http.get("http://localhost:8080/api/question/random");
  }

  getHint(questionNum: string) : Observable<HttpResponse<any>> {
    return this.http.get("http://localhost:8080/api/question/hint/" + questionNum, { observe: 'response', responseType: 'text' });
  }

  answer(questionNum: string, answer: string) : Observable<HttpResponse<any>> {
    return this.http.get("http://localhost:8080/api/question/answer/" + questionNum + "/" + answer, { observe: 'response', responseType: 'text' });
  }
}

export class Question {
  question_num: string = "";
  image_url: string = "";
}
