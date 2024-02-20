import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AdminComponent, HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedTab: string = 'home';

  // 1.How to provide dependency
  constructor(private subService: SubscribeService) {}

  //When HOME Link is clicked
  HomeClicked() {
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked() {
    this.selectedTab = 'admin';
  }

  OnSubscribe() {
    this.subService.OnSubscribeClicked('monthly');
  }
}
