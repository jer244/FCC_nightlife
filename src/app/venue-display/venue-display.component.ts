import { Component, OnInit } from '@angular/core';

import { YelpFusionService } from '../yelp-fusion.service';
import { Venue } from '../venue';

@Component({
  selector: 'nl-venue-display',
  templateUrl: './venue-display.component.html',
  styleUrls: ['./venue-display.component.css']
})
export class VenueDisplayComponent implements OnInit {

  venues: Venue[] = [];

  constructor(private yfs: YelpFusionService) { }

  ngOnInit() {
    this.yfs.changeInVenues.subscribe(
      (newVenues: Venue[]) => this.venues = newVenues
    );
  }

}
