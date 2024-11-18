import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
    <p>
      details works!
    </p>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  housingLocationId = -1;
  constructor(private activeRoute : ActivatedRoute){
    this.housingLocationId = this.activeRoute.snapshot.params['id'];
  }
}
