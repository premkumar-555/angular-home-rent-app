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
        <input type="text" placeholder="Filter by city" #inputItem (input)="inputEvt($event)"/>
        <button
          class="primary"
          type="button"
          (click)="searchHouse(inputItem.value)"
        >
          Search
        </button>
      </form>
      <section class="results">
        <app-housing-location *ngFor="let housingLocation of housingLocationList"
          [housingLocation]="housingLocation"
        ></app-housing-location>
        <p *ngIf="!housingLocationList.length">No search results found!</p>
      </section>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  housingLocationList!: HousingLocation[];

  constructor(private housingService : HousingService){
  this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  searchHouse(val: string) {
    if(!val || val === ""){
      this.housingLocationList = this.housingService.getAllHousingLocations();
    }else{
      this.housingLocationList = this.housingService.searchHouse(val);
    }
  }

  inputEvt($event:any){
    $event.preventDefault();
    if(!$event.target.value){
      this.housingLocationList = this.housingService.getAllHousingLocations();    }
  }
}
