import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Game } from '../../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamestartService {

  gamesCollection: any
  game = new Game()
  constructor(private firestore: Firestore, private router: Router) { 
    this.gamesCollection = collection(this.firestore, 'games');
  }

  startGame(){
    const gameToJson = this.game.toJson();
    addDoc(this.gamesCollection, gameToJson).then((gameInfo) => {
      //console.log(gameInfo.id);
      this.router.navigateByUrl(`/game/${gameInfo.id}`);
    });
  }
}
