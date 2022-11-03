import { Component } from '@angular/core';
import {Question, QuizService} from "./quiz.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tool Quiz';
  question = new Question();
  hint = "";
  answerCorrect = "";
  constructor(private quizService:QuizService) {}

  ngOnInit(): void {this.randomQuestion()}

  randomQuestion() {
    this.quizService.randomQuiz().subscribe((data: any) => {
      this.question.question_num=data.QuestionNum,
      this.question.image_url=data.ImageURL});
    this.hint="";
    this.answerCorrect="";
  }

  getHint() {
    this.quizService.getHint(this.question.question_num).subscribe(resp => {
      this.hint=resp.body.toString();
    })
  }

  checkAnswer(answer : string) {
    this.quizService.answer(this.question.question_num, answer).subscribe(resp => {
      if (resp.body.toString() == "true"){
        this.answerCorrect= "That is the correct answer!!!";
      } else {
        this.answerCorrect= "That is the wrong answer!!!";
      }
    })
  }

}
