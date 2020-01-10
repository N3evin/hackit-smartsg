import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from '../shared/question.service';

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


  constructor(
    private questionService: QuestionService,
  ) {}

  ngOnInit() {
    this.questionService.getQuestions('bc37e56f-1f7f-5ffc-96cd-edf733f49dcd', this.pageLimit, this.qnCurrentPage).subscribe(questions => {
      this.questionsData=questions["questions"];
      this.totalPage=questions["totalPage"];
    });
  }

  isItEndOfPage(event){
    if(event.current+1 >= (this.pageLimit * this.qnCurrentPage) && this.qnCurrentPage < this.totalPage){
      console.log("PAGE LIMIT!");
      this.qnCurrentPage++;
      this.questionService.getQuestions('bc37e56f-1f7f-5ffc-96cd-edf733f49dcd', this.pageLimit, this.qnCurrentPage).subscribe(questions => {
        this.questionsData = JSON.parse(JSON.stringify(this.questionsData.concat(questions["questions"])));
        this.totalPage=questions["totalPage"];

        console.log(this.questionsData);
      });
    }
  }

}
