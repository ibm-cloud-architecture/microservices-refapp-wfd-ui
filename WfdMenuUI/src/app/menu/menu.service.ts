import { Menu } from './menu';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class MenuService {

private baseUrl = `${environment.api}`;

  constructor(private http: Http) {
  }

  getAll(): Observable<Menu[]> {
       console.log(this.baseUrl);
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
  return response.json().map(toMenu);
}
function mapMenu(response: Response): Menu {
  return toMenu(response.json());
}
function toMenu(r: any): Menu {
  return r;
}
