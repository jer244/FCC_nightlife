import { Injectable, EventEmitter } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/Rx';

import { Venue } from './venue';

@Injectable()
export class YelpFusionService {

  changeInVenues = new EventEmitter<Venue[]>();
  private venues: Venue[];

  constructor(private http: Http) { }

  getBars(location: string) {
    this.venues=[];
    //Yelp API prohibits calls from client, must use backend 
    return this.http.get('/api/bars/' + location)
      .map((response: Response) => response.json())
        .subscribe(
          (data) => {
            for (let i=0; i<data.length; i++){
              this.venues.push(new Venue(data[i].name, data[i].image_url, data[i].rating, data[i].url, data[i].review_count, data[i].price, data[i].id, null))
            };
            this.changeInVenues.emit(this.venues);
          });
  }
}
