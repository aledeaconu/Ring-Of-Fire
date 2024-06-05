import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent {

  avatar: number | null = null;
  name: string = '';
  avatarChosen: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EditPlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.name = '';
    this.avatar = data.avatar;
  }

  pickAvatar(index: number) {
    this.avatar = index;
    this.avatarChosen = true;
    console.log('im picked', index);
  }

  changeName(value: string) {
    this.name = value;
    console.log('name input', value);
  }
}