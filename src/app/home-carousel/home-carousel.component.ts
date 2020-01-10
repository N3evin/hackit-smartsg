import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {

  questionsData: any;
  qnCurrentPage: number = 1;
  pageLimit: number = 3;
  totalPage: number = 1;
  id: any;
  @Output() public onPointsUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('uuid');

    this.questionService.getQuestions(this.id, this.pageLimit, this.qnCurrentPage).subscribe(questions => {
      this.questionsData = questions["questions"];
      this.totalPage = questions["totalPage"];
    });
  }

  handlePointsUpdated(event) {
    this.onPointsUpdate.emit(event);

  }

  isItEndOfPage(event) {

    if (event.current + 1 >= (this.pageLimit * this.qnCurrentPage) && this.qnCurrentPage < this.totalPage) {
      console.log("PAGE LIMIT!");
      this.qnCurrentPage++;
      this.questionService.getQuestions(this.id, this.pageLimit, this.qnCurrentPage).subscribe(questions => {
        this.questionsData = JSON.parse(JSON.stringify(this.questionsData.concat(questions["questions"])));
        this.totalPage = questions["totalPage"];

        console.log(this.questionsData);
      });
    }
  }

}
