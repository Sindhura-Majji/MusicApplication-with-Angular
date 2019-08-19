import { Component, OnInit, Inject } from '@angular/core';
import { SearchService } from '../search.service';
import { ITrack } from '../track';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private searchService: SearchService, private dialog : MatDialog) { }

  public tracks : ITrack[];
  public deletedTrack : ITrack;
  public updatedComment: string;
  public updateTrack: ITrack;


  ngOnInit() {
    this.tracks = this.searchService.trackList;
    console.log(this.tracks);
  }

  removeTrack(track : ITrack)
  {
    this.searchService.removeTrack(track).subscribe(
      (data) => {this.deletedTrack = data;
        alert("removed from playlist");
      console.log(this.deletedTrack);
    
      })
  }

  openDialog(track: ITrack) {
    this.updateTrack = track;
    const dialogRef = this.dialog.open(PlayListCommentDialogue,
      {
        width: '250px',
        data: {}
      });

    dialogRef.afterClosed().subscribe(result => {
      this.updatedComment = result;
      console.log(`Dialog result: ${result}`);
      console.log(`updated comment:`, this.updatedComment);
      this.editTack();
    });
  }

  editTack() {
    this.updateTrack.name = this.updatedComment;
    this.searchService.editTrack(this.updateTrack.id, this.updateTrack).subscribe(
      data => {
        console.log("updated Track ", data);
        this.searchService.getPlayList().subscribe(
          data => { this.tracks = data }
        )
      }
    );
  }

}

@Component({
  selector: 'playlist-comment-dialogue',
  templateUrl: 'playlist-comment-dialogue.component.html',
})

export class PlayListCommentDialogue {

  constructor(

    public dialogRef: MatDialogRef<PlayListCommentDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: ITrack) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}