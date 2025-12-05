import { Component, signal } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TripListing } from  './trip-listing/trip-listing';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, JsonPipe, TripListing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Travlr Getaways Admin!';
}
