import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { ITrack } from '../track';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private searchService : SearchService, private router : Router) { }

  ngOnInit() {
  }

  public TrackList : ITrack[];

  getPlayList(){
    this.searchService.getPlayList().subscribe((data) =>{
       this.TrackList = data
       console.log(this.TrackList);
       this.searchService.trackList = data;
       this.router.navigateByUrl('/playList');
    })
  }

}
