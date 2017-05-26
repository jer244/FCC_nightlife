import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { YelpFusionService } from '../yelp-fusion.service';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'nl-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private yfs: YelpFusionService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.yfs.getBars(form.value.location);  
  }
}
