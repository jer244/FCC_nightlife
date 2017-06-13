import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

import { AuthService } from "../auth/auth.service";
import { ApiService } from "../api.service";


@Component({
  selector: 'nl-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private authService: AuthService, private apiService: ApiService) { }

  ngOnInit() {
  }

  hasToken(){  
    return this.authService.hasToken();
  }

  onSubmit(form: NgForm) {
    this.apiService.getBars(form.value.location);  
  }
}
