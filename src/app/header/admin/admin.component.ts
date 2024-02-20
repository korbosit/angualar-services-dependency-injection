import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../../Services/user.service';
import { USER_TOKEN } from '../../app.config';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, UserDetailComponent, UserListComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  // constructor( private userService: UserService) {}
  constructor(@Inject(USER_TOKEN) private userService: UserService) {}

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  CreateNewUser() {
    this.userService.CreateUser(
      this.name,
      this.gender,
      this.subType,
      this.status
    );
  }
}
