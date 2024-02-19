import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  providers: [SubscribeService], // 2.What to provide
})
export class HeroComponent {
  // 1.How to provide dependency
  constructor(private subService: SubscribeService) {}
  OnSubscribe() {
    this.subService.OnSubscribeClicked('early');
  }
}
