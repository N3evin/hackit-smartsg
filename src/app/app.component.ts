import { Component } from '@angular/core';
import { UserService } from './shared/user.service';
import { QuestionService } from './shared/question.service';
import { AnswerService } from './shared/answer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    private userService: UserService,
    private questionService: QuestionService,
    private answerService: AnswerService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.userService.getUser('bc37e56f-1f7f-5ffc-96cd-edf733f49dcd').subscribe(user => {
    //   console.log(user);
    // });
    // this.questionService.getQuestions('bc37e56f-1f7f-5ffc-96cd-edf733f49dcd', 5, 1).subscribe(questions => {
    //   console.log(questions);
    // });

    // this.answerService.submitAnswer({
    //   "uuid": "bc37e56f-1f7f-5ffc-96cd-edf733f49dcd",
    //   "question_id": 1,
    //   "answer": 0
    // }).subscribe(answerResponse => {
    //   console.log(answerResponse);
    // });

  }
  title = 'hackit-smartsg';

}
