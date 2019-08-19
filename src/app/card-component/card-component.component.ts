import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ITrack } from '../track';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Result } from '../Results';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {

  public tracks: ITrack[];
  public track: ITrack;

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let searchString = params.get('searchString');
      this.searchService.getTrack(searchString).subscribe((data) => {
        this.tracks = data.results.trackmatches.track;
        console.log("result is ", this.tracks);
      });
    })

  }

  saveTrack(track: ITrack) {
    console.log("track data is ",track);
    let num=Math.floor(Math.random() * (999999 - 100000)) + 100000;
    console.log("random number is ",num);
    track.id=num;
    console.log("updated track is ",track);
    this.searchService.saveTrack(track).subscribe((data) => {
      this.track = data;
      console.log("result is ", this.track);
    });
  }

}
