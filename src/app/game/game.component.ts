import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import {
  Firestore,
  collection,
  doc,
  docData,
  updateDoc,
} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { GamestartService } from '../services/gamestart.service';
import { EditPlayerComponent } from '../edit-player/edit-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  game = new Game();
  avatar: number[] = [];

  gameCollection: any;
  gameId: string = '';
  gameDoc: any;

  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore,
    public dialog: MatDialog,
    private gameStart: GamestartService,
    private router: Router
  ) {
    this.gameCollection = collection(this.firestore, 'games');
  }

  ngOnInit(): void {
    this.route.params.subscribe((parameter) => {
      this.gameId = parameter['id'];
      console.log('parameter', this.gameId);

      this.gameDoc = doc(this.firestore, `games/${this.gameId}`);
      docData(this.gameDoc).subscribe((game: any) => {
        this.game.players = game.players;
        this.game.playedCard = game.playedCard;
        this.game.currentPlayer = game.currentPlayer || 0;
        this.game.stack = game.stack;
        this.game.avatar = game.avatar;
        this.game.pickCardAnimation = game.pickCardAnimation;
        this.game.currentCard = game.currentCard;
      });
    });
  }

  takeCard() {
    if (!this.game.pickCardAnimation) {
      this.game.currentCard = this.game.stack.pop() || '';
      this.game.pickCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer =
        this.game.currentPlayer % this.game.players.length;
      // console.log(this.game.stack.length)
      this.saveGame();

      setTimeout(() => {
        this.game.playedCard.push(this.game.currentCard);
        this.game.pickCardAnimation = false;

        if (this.game.stack.length === 0) {
          this.endGame();
        }
        this.saveGame();
      }, 1500);
    }
  }

  newGame() {
    this.game = new Game();
    this.saveGame();
  }

  endGame() {
    this.game.gameOver = true;
    this.saveGame();
    console.log(this.game.gameOver, 'game over');
  }

  saveGame() {
    return updateDoc(this.gameDoc, this.game.toJson());
  }

  restartGame() {
    this.gameStart.startGame();
    this.game = new Game();
  }

  backToStartScreen() {
    this.router.navigateByUrl('');
  }

  editPlayer(playerId: number) {
    console.log('Player index', playerId);
    const dialogRef = this.dialog.open(EditPlayerComponent, {
      data: {
        name: this.game.players[playerId],
        avatar: this.game.avatar[playerId],
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('After close dialog', result);
      if (result) {
        if (result === 'DELETE') {
          this.game.players.splice(playerId, 1);
          this.game.avatar.splice(playerId, 1);
        } else {
          if (result.name !== '') {
            this.game.players[playerId] = result.name;
          }
          if (result.avatar !== null) {
            this.game.avatar[playerId] = result.avatar;
          }
        }

        this.saveGame();
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.name.length > 0) {
        this.game.players.push(result.name);
        this.game.avatar.push(result.avatar);
        this.saveGame();
      }
    });
  }
}
