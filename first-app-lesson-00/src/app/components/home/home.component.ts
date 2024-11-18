import { Component, EventEmitter, Output } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../interfaces/housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #inputItem />
        <button
          class="primary"
          type="button"
          (click)="sendInput(inputItem.value)"
        >
          Search
        </button>
      </form>
      <section class="results">
        <app-housing-location *ngFor="let housingLocation of housingLocationList"
          [housingLocation]="housingLocation"
        ></app-housing-location>
      </section>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Output() inputEvt = new EventEmitter<string>();
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  housingLocationList!: HousingLocation[];

  constructor(private housingService : HousingService){
  this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  sendInput(val: string) {
    !!val ? this.inputEvt.emit(val) : alert('Please enter a value!');
  }
}
