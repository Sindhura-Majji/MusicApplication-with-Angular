import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponentComponent } from './card-component/card-component.component';
import { PlaylistComponent } from './playlist/playlist.component';


const routes: Routes = [
  {
    path: '',
    component: CardComponentComponent
  },
  {
    path : 'track/:searchString',
    component: CardComponentComponent
  },
  {
    path : 'playList',
    component: PlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
