import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-search-list',
  template: `
  <div class="appList" *ngIf="searchParent">
    <div class="appListMovies" *ngFor="let result of searchParent.Search">
      <div class="appListMoviesPicture">
        <img src='{{result.Poster}}'/>
      </div><br />
      <div class="appListMoviesDescription">
        {{result.Title}}<br/>
        <button *ngFor="let text of arrayJson" type="button" routerLink="/detail/{{result.imdbID}}">{{text.element}}</button>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  @Input() searchParent;
  arrayJson: any = [];

  constructor(private movies: MoviesService) { }

  ngOnInit() {
    this.movies.getJson().subscribe(text => {
      this.arrayJson = text;
    })
  }
}
