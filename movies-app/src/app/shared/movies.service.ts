import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interface/movie';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpMovies: HttpClient) { }

  getDataMovies(str: string) {
    let urlApi: string = 'http://www.omdbapi.com/?s='+str+'&apikey=7be8b91c';
    return this.httpMovies.get(urlApi);
  }

  getDetailMovies(id: string) {
    let urlApi: string = 'http://www.omdbapi.com/?i='+id+'&apikey=key';
    return this.httpMovies.get(urlApi);
  }
}
