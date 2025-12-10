import { Component } from '@angular/core';
import { TripData } from '../services/trip-data';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.html',
  styleUrls: ['./trip-edit.css']
})
export class TripEditComponent {
  editTripFormGroup!: FormGroup;
  submitted = false;
  private tripCode: string | null = null;

  constructor(
    private tripService: TripData,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // retrieve stashed tripId
    this.tripCode = localStorage.getItem('tripCode');
    if (!this.tripCode) {
      console.error("Something has gone wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }
    console.log('TripEdit#onInit found tripCode ' + this.tripCode);

    // initialize form
    this.editTripFormGroup = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });

    console.log(`TripEdit#onInit calling TripData#getTrip('${this.tripCode}')`);
    // Retrieve the most recent trip data from the database
    this.tripService.getTrip(this.tripCode).then((data) => {
      console.log('TripEdit#onInit data', data);
      // Don't use editTripFormGroup.setValue() as it will throw console error
      this.editTripFormGroup.patchValue(data[0]);
    });
  }

  onSubmit() {
    console.log(`TripEdit#onSubmit calling TripData#updateTrip('${this.tripCode}')`);
    this.submitted = true;
    if (this.editTripFormGroup.valid) {
      this.tripService.updateTrip(this.editTripFormGroup.value).then((data) => {
        console.log('TripEdit#onSubmit data', data);
        this.router.navigate(['']);
      });
    }
  }

  deleteTrip() {
    console.log(`TripEdit#deleteTrip calling TripData#deleteTrip('${this.tripCode}')`);
    if (this.tripCode != null) {
      this.tripService.deleteTrip(this.tripCode).then((data) => {
        console.log('TripEdit#deleteTrip data', data);
        this.router.navigate(['']);
      });
    } else {
      console.error('TripEdit#deleteTrip failed, tripCode is null');
      this.router.navigate(['']);
    }
  }

  // Get the form short name to access the form fields
  get f() {
    return this.editTripFormGroup.controls;
  }
}