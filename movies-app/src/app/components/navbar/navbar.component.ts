import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">MoviesApp</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li *ngFor="let text of arrayJson"><a routerLink="{{text.url}}">{{text.text}}</a></li>
      </ul>
    </div>
  </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  arrayJson: any = [];

  constructor(private movies: MoviesService) { }

  ngOnInit() {
    this.movies.getJsonNav().subscribe(text => {
      this.arrayJson = text;
    })
  }

}
