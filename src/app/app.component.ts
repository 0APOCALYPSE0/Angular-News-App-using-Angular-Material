import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  mArticles:any;
  mSources:any;

  constructor(private newsApi:NewsApiService){}

  ngOnInit(){
    //load news resources
    this.newsApi.initSources().subscribe(data => this.mSources = data['sources']);
    //load articles
    this.newsApi.initArticles().subscribe(data => this.mArticles = data['articles']);
  }

  searchArticles(source:any){
    this.newsApi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}
