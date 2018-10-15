import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="appAbout">
      <h1>Christopher Kumla</h1><br/>
      <h2>MoviesApp</h2><br/>
      <h2>Application de recherche<br/> de film ou de série</h2>
      <h3>Copyright 2018</h3>
    </div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
