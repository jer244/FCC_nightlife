import { Component, OnInit, OnChanges } from '@angular/core';

import { YelpFusionService } from '../yelp-fusion.service';
import { AuthService } from "../auth/auth.service";
import { Venue } from '../venue';

@Component({
  selector: 'nl-venue-display',
  templateUrl: './venue-display.component.html',
  styleUrls: ['./venue-display.component.css']
})
export class VenueDisplayComponent implements OnInit, OnChanges {

  venues: Venue[] = [];

  constructor(private yfs: YelpFusionService, private authService: AuthService) { }

  ngOnInit() {
    this.yfs.changeInVenues.subscribe(
      (newVenues: Venue[]) => this.venues = newVenues
      );
  }

  ngOnChanges(){    
  }

  hasToken(){  
    return this.authService.hasToken();
  }
}

