import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnswerService } from '../shared/answer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  clickedAnswer: string;
  disableAnswer: boolean = false;
  id: any;
  @Input() questionData: any;
  @Output() public onPointsUpdate: EventEmitter<any> = new EventEmitter<any>();

  congratsText: string;
  insultText: string;

  insults = ["What are you doing?", "Go read up!", "Try next answer la!"];

  constructor(
    private answerService: AnswerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('uuid');

  }

  convertToJson(answers) {
    return JSON.parse(answers)["answers"];
  }

  submitAnswer(event) {
    this.answerService.submitAnswer({
      "uuid": this.id,
      "question_id": this.questionData.id,
      "answer": event
    }).subscribe(answerResponse => {
      if (answerResponse["message"] != "wrong answer") {
        this.disableAnswer = true;
        this.congratsText = "You are right! You are awarded " + answerResponse["pointsAwarded"] + " points!"
        this.onPointsUpdate.emit(answerResponse['updatedPoints']);

      } else {
        this.insultText = this.insults[Math.floor(Math.random() * this.insults.length)]
      }
      console.log(answerResponse);
    });
  }

}
