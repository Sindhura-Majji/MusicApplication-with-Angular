import { Injectable,OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { ITrack} from './track';
import { Observable} from 'rxjs';
import { Result } from './Results';
import { Guid } from 'guid-typescript';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private http: HttpClient) {  }

  public results : any;
  public trackList : ITrack[];
  public url = "http://localhost:8080/track";


  getTrack(searchString): Observable<Result>{
    let params = new HttpParams();
    params = params.append('track', searchString);
    var url = 'http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=d49c2ee6942b4ad28ef6334c4591f231&format=json';
    this.http.get<Result>(url, { params: params }).subscribe((data) => { this.results = data });
    return this.http.get<Result>(url, { params: params });
  //  return this.http.get<Result>("http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=d9aace66229efbd3df8f4b7e98fc88f9&format=json&track="+searchString);
}

getPlayList(): Observable<ITrack[]> {
  var getUrl = "http://localhost:8080/track";
  // this.http.get<Track[]>(getUrl).subscribe((data) => {this.trackList = data});
  return this.http.get<ITrack[]>(getUrl);
}

saveTrack(track: ITrack): Observable<ITrack> {
  var postUrl = "http://localhost:8080/track";
  return this.http.post<ITrack>(postUrl, track, httpOptions);
}

removeTrack(track: ITrack): Observable<ITrack> {
  console.log(track);
  return this.http.delete<ITrack>(this.url + "/" + track.id);
}

editTrack(id: number, track : ITrack)
  {
    return this.http.put<ITrack>(this.url + "/" + track.id, track, httpOptions);
  }

}
