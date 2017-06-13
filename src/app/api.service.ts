import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Venue } from './venue';
@Injectable()
export class ApiService {

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
              this.venues.push(new Venue(data[i].name, data[i].image_url, data[i].rating, data[i].url, data[i].review_count, data[i].price, data[i].id))
            };
            this.changeInVenues.emit(this.venues);
          });
  }

   getAttendance(venues: Venue[]) {
      const body = JSON.stringify(venues)
      const headers = new Headers({'Content-Type': "application/json"});
      return this.http.post('http://localhost:3000/api/attendance', body, {headers: headers})
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error));
   }   

  
}
