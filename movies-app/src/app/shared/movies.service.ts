import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getJson() {
    return this.httpMovies.get('../../assets/textList.json');
  }
  getJsonTitle() {
    return this.httpMovies.get('../../assets/title.json');
  }
  getJsonDétails() {
    return this.httpMovies.get('../../assets/textDetails.json');
  }
  getJsonNav() {
    return this.httpMovies.get('../../assets/textNav.json');
  }
}
