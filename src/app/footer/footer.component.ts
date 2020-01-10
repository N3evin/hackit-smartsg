import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  user: any;
  id: any;
  @Input() updatedPoints: any

  constructor(
  	private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('uuid');

    this.userService.getUser(this.id).subscribe(user => {
      this.user = user;
      this.updatedPoints = user['points'];
    });
  }

}
