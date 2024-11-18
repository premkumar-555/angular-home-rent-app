import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `<main>
    <header class="brand-name">
      <img
        class="brand-logo"
        src="/assets/logo.svg"
        alt="logo"
        aria-hidden="true"
      />
    </header>
    <section class="content">
      <app-home (inputEvt)="getInput($event)"></app-home>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';

  getInput($event:string){
    console.log('Received input value : ', $event);
  }
}
