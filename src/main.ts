import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { decks } from './configs/decks';
import { cards, Cards } from './configs/cards';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
})
export class App {
  id!: number;
  listedCards!: Cards[];
  cards = cards;
  decks = decks;

  getCards(id: number) {
    this.id = id;
    this.listedCards = [];

    this.cards.forEach((card) => {
      if (card.deckId === id) {
        this.listedCards.push(card);
      }
    });
  }
}

bootstrapApplication(App);
