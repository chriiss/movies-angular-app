import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/movies.service';
import { Movie } from 'src/app/interface/movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  template: `
  <form autocomplete="off">
    <input type='text' class="form-control" [(ngModel)]="search" name="search" (keyup)="searchMovie()" placeholder="Saisir un titre"/>
  </form>
  <app-search-list [searchParent]="searchResult"></app-search-list>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: string;
  searchResult: any = {};

  constructor(private movies: MoviesService) { }

  ngOnInit() {
    this.searchMovie();
  }
  searchMovie() {
    this.movies.getDataMovies(this.search).subscribe(data => {
      this.searchResult = data;
    })
   }

}
