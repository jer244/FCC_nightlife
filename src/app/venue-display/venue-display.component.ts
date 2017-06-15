import { Component, OnInit } from '@angular/core';

import { AuthService } from "../auth/auth.service";
import { ApiService } from "../api.service";
import { Venue } from '../venue';

@Component({
  selector: 'nl-venue-display',
  templateUrl: './venue-display.component.html',
  styleUrls: ['./venue-display.component.css']
})
export class VenueDisplayComponent implements OnInit {

  venues: Venue[];

  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.venues = this.apiService.getCurrentBars();
    console.log("init - venues[] = ", this.venues)
    this.apiService.changeInVenues.subscribe(
      (newVenues: Venue[]) => {
        this.venues = newVenues;
        this.getAttendance();
      });
  }

  addUser(venueId: string){
    this.apiService.addUser(venueId);
  }

  getAttendance(){
     this.apiService.getAttendance(this.venues)
          .subscribe(
        (data: Response) => console.log(data)
      );
  }

  hasToken(){  
    return this.authService.hasToken();
  }
}

