import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  foundShows: any;
  allShows: any;
  genreChosen: any;
  genreSections: string[];
  extras = [1, 2, 3, 4, 5, 6, 7];
  organizedShows: any;
  searchTerm: any;
  shows: any;
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://ended-by-netflix-backend.herokuapp.com/shows.json')
    .subscribe(res => {
      this.genreSections = ['drama', 'comedy', 'miniseries', 'adult_animation', 'anime', 'kids_and_family', 'docuseries', 'reality', 'variety'];
      this.organizedShows = res
      this.getAll();
    });
  }

  chooseGenre(genre: string) {
    this.genreChosen = genre.split('_').join(' ');
    this.http.get(`https://ended-by-netflix-backend.herokuapp.com/genre_shows/${this.genreChosen}.json`)
    .subscribe(res => this.shows = res);
  }

  clearGenre() {
    if (this.searchTerm) {
      this.searchTerm = null;
    } else {
      this.genreChosen = null;
    }
  }

  getAll()  {
    this.http.get(`https://ended-by-netflix-backend.herokuapp.com/all_shows.json`)
    .subscribe(res => {
      this.allShows = res});
  }

  search(value: any)  {
    const filter = this.allShows.filter((show: string) => show.toLowerCase().includes(value));
    this.http.get(`https://ended-by-netflix-backend.herokuapp.com/search_shows.json?string=${filter}`)
    .subscribe(res => this.foundShows = res);
  }
}
