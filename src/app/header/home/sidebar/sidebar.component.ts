import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  // 1.How to provide dependency
  constructor(private subService: SubscribeService) {}
  OnSubscribe() {
    this.subService.OnSubscribeClicked('quaterly');
  }
}
