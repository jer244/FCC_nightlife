import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { YelpFusionService } from './yelp-fusion.service';
import { VenueDisplayComponent } from './venue-display/venue-display.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    VenueDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [YelpFusionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
