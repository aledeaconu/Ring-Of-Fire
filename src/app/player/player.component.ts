import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  @Input() name: string = '';
  @Input() activePlayer: boolean = false;
  @Input() avatar: number | null = null;
  @Input() avatarChosen: boolean = true

  
}
