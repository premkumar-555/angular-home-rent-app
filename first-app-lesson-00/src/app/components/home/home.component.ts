import { Component, EventEmitter, Output } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../interfaces/housing-location';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #inputItem/>
        <button class="primary" type="button" (click)="sendInput(inputItem.value)">Search</button>
      </form>
      <section class="results">
        <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
      </section>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
@Output() inputEvt = new EventEmitter<string>();
readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

housingLocation: HousingLocation = {
  id: 9999,
  name: 'Test Home',
  city: 'Test city',
  state: 'ST',
  photo: `${this.baseUrl}/example-house.jpg`,
  availableUnits: 99,
  wifi: true,
  laundry: false,
};

sendInput(val:string){
  !!val ? this.inputEvt.emit(val) : alert('Please enter a value!');
}

}
