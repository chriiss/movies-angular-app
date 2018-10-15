import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-search',
  template: `
  <div class="appSearch">
    <h1 *ngFor="let title of arrayJson">{{title.element}}</h1>
    <form autocomplete="off">
      <input type='text' class="form-control" [(ngModel)]="search" name="search" (keyup)="searchMovie()" placeholder="Saisir un titre"/>
    </form>
  </div>
  <app-search-list [searchParent]="searchResult"></app-search-list>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: string;
  searchResult: any = {};
  arrayJson: any = [];

  constructor(private movies: MoviesService) { }

  ngOnInit() {
    this.searchMovie();
    this.jsonTitle();
  }
  searchMovie() {
    this.movies.getDataMovies(this.search).subscribe(data => {
      this.searchResult = data;
    })
  }
  jsonTitle() {
    this.movies.getJsonTitle().subscribe(title => {
      this.arrayJson = title;
    })
  }

}
