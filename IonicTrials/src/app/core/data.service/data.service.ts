import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
} 

@Injectable({
  providedIn: 'root'
})

export class InfoService {
  //  Constructor of the Service with Dependency Injection
  //  @param http The standard Angular HttpClient to make requests
  constructor() { }         //private http: HttpClient
  QUESTION_LIST = [
    {"id":1, "name": "What is the process to write static list in angular?", "option1": "Read doc", "option2": "Stack overflow", "option3": "Official site", "option4": "Guide", "status": "InActive", "submitted": false, "selected": ""},
    {"id":2, "name": "How the services works in ionic application using angular?", "option1": "BG Service", "option2": "FG Service", "option3": "Official site", "option4": "Guide", "status": "InActive", "submitted": true, "selected": ""},
    {"id":3, "name": "How many types of services?", "option1": " Background", "option2": "Bound", "option3": "Official site", "option4": "Foreground", "status": "InActive", "submitted": false, "selected": ""}
  ]

  // Get data from the Omdb Api
  // map the result to return only the results that we need
  // @param {string} title Search Term
  // @param {SearchType} type movie, series, episode or empty
  // @returns Observable with the search results
  searchData(): Observable<any> {
      const obsFrom = Observable.of(this.QUESTION_LIST);
      obsFrom.subscribe(val => console.log(val),
        error => console.log("error"),
        () => console.log("complete"))
        return obsFrom;

    // return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`)
    //   .pipe(
    //     map(results => {
    //       console.log('RAW: ', results);
    //       return results['Search'];
    //     })
    //   );
  }

  getDetails(id){
      let que = {
        ...this.QUESTION_LIST.find(que => {
          return que.id == id;
      })
     };

    const obsFrom = Observable.of(que);
    obsFrom.subscribe(val => console.log(val),
      error => console.log("error"),
      () => console.log("complete"))
      return obsFrom;
    }

  // Get detailed information using the "i" (not "id") parameter
  // @param {string} id imdbID to retrieve information
  // @returns Observable with detailed information
//   getDetails(id) {
//     return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
//   }
}
