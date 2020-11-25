import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NewsApiService {

  private API_KEY:string = "ec73080af2dc4d0e94dfbbb997fe385c";

  constructor(private http:HttpClient) { }

  initSources(): Observable<any>{
    return this.http.get<any>('https://newsapi.org/v2/sources?language=en&apiKey='+this.API_KEY);
  }

  initArticles(): Observable<any>{
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.API_KEY);
  }

  getArticlesByID(source: String): Observable<any>{
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.API_KEY);
  }
}
