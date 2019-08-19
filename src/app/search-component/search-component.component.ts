import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SearchService} from 'src/app/search.service';
import { ITrack} from '../track';
import { Result } from '../Results';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

public results:Result;
  name: string = "";
  response: any;

  constructor(private searchService: SearchService, private router : Router) { }

  ngOnInit() {
  }

search(searchString:string){

  this.searchService.getTrack(searchString)
      .subscribe((data) => {this.results = data;
      console.log(this.results)});
      this.router.navigate(["/track",searchString]);
}
}
