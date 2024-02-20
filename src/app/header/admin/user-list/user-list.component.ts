import { UserService } from './../../../Services/user.service';
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USER_TOKEN } from '../../../app.config';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  // constructor(private userService: UserService) {}
  constructor(@Inject(USER_TOKEN) private userService: UserService) {}

  userList = this.userService.GetAllUsers();
}
