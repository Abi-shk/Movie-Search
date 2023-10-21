import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  movieName: string = '';
  movieData: any = null;
  apiKey: string = 'fa1c9c03';

  constructor(private http: HttpClient) {}

  searchMovie() {
    const apiUrl = `https://www.omdbapi.com/?apikey=${this.apiKey}&t=${this.movieName}`;
    this.http.get(apiUrl).subscribe((data: any) => {
      this.movieData = data;
    });
  }

  onInputChange() {
    this.movieData = null; 
}
}
