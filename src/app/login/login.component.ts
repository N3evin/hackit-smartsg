import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router

  ) { }

  ngOnInit() {
    this.userService.createUser().subscribe(user => {
      this.router.navigate(['/home/' + user['uuid']])
    })
  }

}
