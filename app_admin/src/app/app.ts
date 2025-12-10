import { Component, signal } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../app/navbar/navbar';
import { TripListing } from  './trip-listing/trip-listing';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, JsonPipe, TripListing, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Travlr Getaways Admin';
}
