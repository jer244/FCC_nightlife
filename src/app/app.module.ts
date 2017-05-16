import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { YelpFusionService } from './yelp-fusion.service';
import { VenueDisplayComponent } from './venue-display/venue-display.component';
import { HeaderComponent } from './partials/header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { SignupComponent } from './auth/signup.component';
import { SigninComponent } from './auth/signin.component';
import { LogoutComponent } from './auth/logout.component';
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    VenueDisplayComponent,
    HeaderComponent,
    AuthenticationComponent,
    SignupComponent,
    SigninComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    YelpFusionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
