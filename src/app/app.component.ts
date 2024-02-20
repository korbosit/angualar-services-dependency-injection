import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
// import { SubscribeService } from './Services/subscribe.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [SubscribeService], // 2.What to provide
})
export class AppComponent {
  title = 'angualar-services-dependency-injection';
}
