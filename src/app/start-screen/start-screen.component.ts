import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Game } from '../../models/game';
import { log } from 'console';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
})
export class StartScreenComponent {
  gamesCollection: any;
  game = new Game();
  
  constructor(private firestore: Firestore, private router: Router) {
    this.gamesCollection = collection(this.firestore, 'games');
  }

  startGame() {
    const gameToJson = this.game.toJson();
    addDoc(this.gamesCollection, gameToJson).then((gameInfo) => {
      //console.log(gameInfo.id);
      this.router.navigateByUrl(`/game/${gameInfo.id}`);
    });
  }
}
