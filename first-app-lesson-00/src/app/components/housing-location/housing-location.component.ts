import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../interfaces/housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
@Input() housingLocation!: HousingLocation;
}
