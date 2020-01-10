import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {

  user: any;
  @Input() updatedPoints: any
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUser('bc37e56f-1f7f-5ffc-96cd-edf733f49dcd').subscribe(user => {
      this.user = user;
      this.updatedPoints = user['points'];
      console.log(user);
    });

  }

}
