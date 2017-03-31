import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class YelpFusionService {

  constructor(private http: Http) { }

  getBars() {
    //Yelp API prohibits calls from client, so must use backend 
    return this.http.get('/api/bars');
  }
}
