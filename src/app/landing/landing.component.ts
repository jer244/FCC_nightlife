import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { YelpFusionService } from '../yelp-fusion.service';

@Component({
  selector: 'nl-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private yfs: YelpFusionService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.yfs.getBars().subscribe(
      data => { 
        console.log(data)
      });
  }

}
