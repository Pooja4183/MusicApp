import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongPlayerComponent } from './components/song-player/song-player.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'songs', component: SongListComponent },
  { path: 'player/:id', component: SongPlayerComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Ensure routes are exported if you need them elsewhere
export { routes };
