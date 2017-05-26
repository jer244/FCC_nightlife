import { Component, OnInit, OnChanges } from '@angular/core';

import { AuthService } from "../auth/auth.service";
import { ApiService } from "../api.service";
import { Venue } from '../venue';

@Component({
  selector: 'nl-venue-display',
  templateUrl: './venue-display.component.html',
  styleUrls: ['./venue-display.component.css']
})
export class VenueDisplayComponent implements OnInit, OnChanges {

  venues: Venue[] = [];

  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.apiService.changeInVenues.subscribe(
      (newVenues: Venue[]) => this.venues = newVenues
      );
  }

  ngOnChanges(){    
  }

  hasToken(){  
    return this.authService.hasToken();
  }
}

