import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DialogAddPlayerComponent } from './dialog-add-player/dialog-add-player.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { GameInfoComponent } from './game-info/game-info.component';
import { MatCardModule } from '@angular/material/card';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FirestoreModule } from '@angular/fire/firestore';
import { PlayerMobileComponent } from './player-mobile/player-mobile.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    GameComponent,
    PlayerComponent,
    DialogAddPlayerComponent,
    GameInfoComponent,
    PlayerMobileComponent,
    EditPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    FirestoreModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ring-of-fire-22138',
        appId: '1:1083633080582:web:c48ba7ef0e23bd7b5e6687',
        storageBucket: 'ring-of-fire-22138.appspot.com',
        apiKey: 'AIzaSyAXT8oa-2ZM-lRsCLiX9mVQERsry0hCTXw',
        authDomain: 'ring-of-fire-22138.firebaseapp.com',
        messagingSenderId: '1083633080582',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-22138","appId":"1:1083633080582:web:c48ba7ef0e23bd7b5e6687","storageBucket":"ring-of-fire-22138.appspot.com","apiKey":"AIzaSyAXT8oa-2ZM-lRsCLiX9mVQERsry0hCTXw","authDomain":"ring-of-fire-22138.firebaseapp.com","messagingSenderId":"1083633080582"})),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
