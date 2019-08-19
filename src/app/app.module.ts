import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout'
import { MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { SearchService} from './search.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {PlayListCommentDialogue} from './playlist/playlist.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PlaylistComponent,
    SearchComponentComponent,
    CardComponentComponent,
    PlayListCommentDialogue,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [ PlayListCommentDialogue],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
