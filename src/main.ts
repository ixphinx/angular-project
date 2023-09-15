import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { decks } from './configs/decks';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
})
export class App {
  decks = decks;
  id!: number;

  getId(id: number) {
    this.id = id;
  }
}

bootstrapApplication(App);
