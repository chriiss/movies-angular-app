import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/shared/movies.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-movie-detail',
  template: `
  <div class="appList" *ngIf="searchResult">
  <div class="appListMovies">
    <div class="appListMoviesPicture">
      <img src="{{searchResult.Poster}}" />
    </div><br />
    <div class="appListMoviesDescription">
      {{searchResult.Title}}
      {{searchResult.Year}}
      {{searchResult.Actors}}
    </div>
  </div>
    <button type="button" routerLink="/home">Back Home</button>
  `,
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id: string;
  searchResult: any = {};

  constructor(private detailMovie: MoviesService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.pipe(map(params => params['id'])).subscribe(id => {
      this.detailMovie.getDetailMovies(id).subscribe(data => {
        this.searchResult = data;
        console.log(data);
      })
    })
  }

}
