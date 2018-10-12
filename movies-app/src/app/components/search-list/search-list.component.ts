import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/shared/movies.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-list',
  template: `
  <div class="appList" *ngIf="searchParent">
    <div class="appListMovies" *ngFor="let result of searchParent.Search">
      <div class="appListMoviesPicture">
        <img src='{{result.Poster}}'/>
      </div><br />
      <div class="appListMoviesDescription">
        {{result.Title}}
        <button type="button" routerLink="/detail/{{result.imdbID}}">détails</button>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  @Input() searchParent;

  constructor() { }

  ngOnInit() {
  }
}
