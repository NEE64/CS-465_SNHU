import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { trips } from '../data/trips';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root',
})

export class TripData {
  addTrip: any;
  updateTrip: any;
  deleteTrip: any;
  getTrip: any;
  constructor(private http: HttpClient){}

  getTrips(tripCode: string) : Observable<Trip[]> {
    let url = 'http://localhost:3000/api/trips';

    return this.http.get<Trip[]>(url);
  }
}
