import { User } from '../Models/User';
import { LoggerService } from './logger.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UserService {
  users: User[] = [
    new User('Steave Smith', 'Male', 'Monthly', 'Active'),
    new User('Mary Jane', 'Female', 'Yearly', 'Inactive'),
    new User('Mark Tyler', 'Male', 'Quaterly', 'Active'),
  ];

  constructor(private logger: LoggerService) {}

  OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

  OnShowUserDetails(user: User) {
    this.OnUserDetailsClicked.emit(user);
  }

  GetAllUsers() {
    return this.users;
  }

  CreateUser(name: string, gender: string, subType: string, status: string) {
    let user = new User(name, gender, subType, status);
    this.users.push(user);
    // let logger = new LoggerService();
    this.logger.LogMessage(name, status);
  }
}
