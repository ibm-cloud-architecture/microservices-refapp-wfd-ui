import { Menu } from './menu';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

private baseUrl = 'http://localhost:9180/WfdMenu/rest'; //TODO This needs to be parameterized

  constructor(private http: Http) {
  }

  getAll(): Observable<Menu[]> {
       const menu$ =
       this.http
      .get(`${this.baseUrl}/menu`, {headers: this.getHeaders()})
      .map(mapMenus);
       return menu$;
  }
  private getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
function mapMenus(response: Response): Menu[] {
 // console.log(response.json());
  return response.json().map(toMenu);
}
function mapMenu(response: Response): Menu {
  return toMenu(response.json());
}
function toMenu(r: any): Menu {
  // console.log(r);
  return r;
}
