import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { trips } from '../data/trips';
import { TripCard } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
//import { TripDataService } from '../services/trip-data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  imports: [CommonModule, JsonPipe, TripListing, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
  providers: []
})
export class TripListing implements OnInit {
  trips: Array<any> = trips;

  constructor(
    private router: Router
  ) {
    console.log('trip-listing constructor');
  }
  public addTrip(): void{
    this.router.navigate(['add-trip'])
  }

  ngOnInit(): void{

  }
}

