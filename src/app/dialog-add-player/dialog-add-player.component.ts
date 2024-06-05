import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss',
})
export class DialogAddPlayerComponent {
  name: string = '';
  avatarChosen: boolean = false;
  avatar: number | null = null;
  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {}

  noClick() {
    this.dialogRef.close();
  }

  avatarPicked(index: number) {
    this.avatarChosen = true;
    this.avatar = index;
    return index;
  }
}
