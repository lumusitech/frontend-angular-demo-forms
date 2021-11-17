import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Person {
  name: string;
  favourites: Favourite[];
}

interface Favourite {
  id: number;
  name: string;
}
@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  @ViewChild('myForm') myForm!: NgForm;

  person: Person = {
    name: 'Luciano Figueroa',
    favourites: [
      { id: 1, name: 'Metal Gear' },
      { id: 2, name: 'Death Stranding' }
    ]
  }

  newGame: string = '';

  add() {
    const newFavourite: Favourite = {
      id: this.person.favourites.length + 1,
      name: this.newGame
    }

    if (this.newGame) this.person.favourites.push({ ...newFavourite });
    this.newGame = "";
  }

  remove(i: number) {
    this.person.favourites = this.person.favourites.filter(fav => fav.id !== i);
  }

  save(): void {
    console.log(this.myForm);
    this.myForm.reset();
  }

}
