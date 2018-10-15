import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/shared/movies.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-movie-detail',
  template: `
  <button type="button" routerLink="/home"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> <span *ngFor="let text of arrayJson"> {{text.home}}</span></button>
  <div class="appListDetails" *ngIf="searchResult">
    <div class="appListDetailsTitle">
      <h2>{{searchResult.Title}}</h2>
    </div>
    <div class="appListDetailsMovies">
      <div class="appListDetailsMoviesPicture">
        <img src="{{searchResult.Poster}}" />
      </div><br />
      <div class="appListDetailsMoviesDescription">
        <label>Genre:</label><span>{{searchResult.Genre}}</span><br/>
        <label>Date de sortie:</label> <span>{{searchResult.Released}}</span><br/>
        <label>Saisons:</label><span>{{searchResult.totalSeasons}}</span><br/>
        <label>Durée:</label><span>{{searchResult.Runtime}}</span><br/>
        <label>De:</label><span>{{searchResult.Director}}</span><br/>
        <label>Notes:</label> <span>{{searchResult.imdbRating}}</span><br/>
        <label>Nationalité:</label><span>{{searchResult.Country}}</span><br/>
        <label>Acteurs:</label><span>{{searchResult.Actors}}</span>
      </div>
    </div>
  </div>
  <div class="footerDetails">
    <h3 *ngFor="let text of arrayJson">{{text.resume}}</h3>
    <p>{{searchResult.Plot}}</p>
    <h3 *ngFor="let text of arrayJson">{{text.info}}</h3>
    <p><b>Type:</b> {{searchResult.Type}}</p>
    <p><b>Box Office:</b> {{searchResult.BoxOffice}}</p>
    <p><b>Production:</b> {{searchResult.Production}}</p>
    <p><b>Awards:</b> {{searchResult.Awards}}</p>
    <p><b>Ecrivain:</b> {{searchResult.Writer}}</p>
    <p><b>Sortie en DVD:</b> {{searchResult.DVD}}</p>
  </div>
  `,
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id: string;
  searchResult: any = {};
  arrayJson: any = [];

  constructor(private detailMovie: MoviesService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.pipe(map(params => params['id'])).subscribe(id => {
      this.detailMovie.getDetailMovies(id).subscribe(data => {
        this.searchResult = data;
        console.log(data);
      })
    })
    this.detailMovie.getJsonDétails().subscribe(text => {
      this.arrayJson = text;
    })
  }

}
