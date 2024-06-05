import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-player-mobile',
  templateUrl: './player-mobile.component.html',
  styleUrl: './player-mobile.component.scss'
})
export class PlayerMobileComponent  {
  @Input() name: string = '';
  @Input() activePlayer: boolean = false
  @Input() avatar: number | null = null;
  @Input() avatarChosen: boolean = true
  

}
