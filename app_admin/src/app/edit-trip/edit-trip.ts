import { Component, OnInit } from '@angular/core';
import { TripData } from '../services/trip-data';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Trip } from '../models/trip';
import { get } from 'mongoose';

//var public editForm!: FormGroup;
//const trip!: Trip;
const submitted = false;
let message : string = '';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.html',
  styleUrls: ['./trip-edit.css']
})

export class EditTrip implements OnInit {
  message: any;
  editForm: any;
  submitted!: boolean;
  tripDataService: any;

  constructor (
  private formBuilder: FormBuilder,
  private router: Router,
  private tripData: TripData
){};

  ngOnInit() : void{
    // Retrieve stashed trip ID
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Oh no! Something went wrong, and we couldn't find the tripCode!");
      this.router.navigate(['']);
      return;
    };

    console.log('EditTripComponent::ngOnInit');
    console.log('tripcode:' + tripCode);

    this.editForm = this.formBuilder.group({_id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required] 
    });

    this.tripData.getTrip(tripCode)
    .subscribe({
      next: (value: any) => {
        this.tripData = value;
        // Populate our record into the form
        this.editForm.patchValue(value[0]);
        if(!value) {
          this.message = 'Could not retrieve the requested trip.';
        }
        else {
          this.message = 'Trip: ' + tripCode + ' retrieved';
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    })

    //var public onSubmit() => {
      //this.submitted = true;
      //if(this.editForm.valid) {
        //this.tripDataService.updateTrip(this.editForm.value)
        //.subscribe({
          //next: (value: any) => {
            //console.log(value);
            //this.router.navigate(['']);
          //},
          //error: (error: any) => {
            //console.log('Error: ' + error);
          //}
        //})
      //}
      // get the form short name to access the form fields
      //get f(){ return this.editForm.controls; }
    };
  }


