import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DevRantService {
  constructor(private http:Http) {
  }

  getRants(sort:String, skip:number) {
    return this.http.get('https://www.devrant.io/api/devrant/rants?app=3&sort=' + sort + '&skip=' + skip)
      .map(response => response.json().rants);
  }

  getComments(id:number) {
    return this.http.get('https://www.devrant.io/api/devrant/rants/' + id + '?app=3')
      .map(response => response.json().comments);
  }
}
