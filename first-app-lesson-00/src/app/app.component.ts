import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `<main>
  <a [routerLink]="['/']">
    <header class="brand-name">
      <img
        class="brand-logo"
        src="/assets/logo.svg"
        alt="logo"
        aria-hidden="true"
      />
    </header>
     </a>
    <section class="content">
    <router-outlet></router-outlet>
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
