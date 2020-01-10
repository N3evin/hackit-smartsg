import { Component, OnInit, Input } from '@angular/core';
import { AnswerService } from '../shared/answer.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  clickedAnswer: string;
  disableAnswer: boolean = false;
  @Input() questionData: any;
  congratsText: string;

  insults = ["What are you doing?", "Go read up!", "Try next answer la!"];

  constructor(
    private answerService: AnswerService
  ) { }

  ngOnInit() {
  }

  convertToJson(answers){
  	return JSON.parse(answers)["answers"];
  }

  submitAnswer(event){
    this.answerService.submitAnswer({
      "uuid": "bc37e56f-1f7f-5ffc-96cd-edf733f49dcd",
      "question_id": this.questionData.id,
      "answer": event
    }).subscribe(answerResponse => {
      if(answerResponse["message"] != "wrong answer"){
        this.disableAnswer = true;
        this.congratsText = "You are right! You are awarded " + answerResponse["pointsAwarded"] +" points!"
      } else {
        this.congratsText = this.insults[Math.floor(Math.random() * this.insults.length)]
      }
      console.log(answerResponse);
    });
  }

}
