import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  url: string;

  constructor(public http: HttpClient) { 
    this.url = environment.urlLibros
  }

  getAll(clave: string): Promise<any> {
    return this.http.get(this.url+clave).toPromise()
  }


  getAllRx(clave: string): Observable<Array<string>> {
    return this.http
    .get(this.url+clave)
    .pipe( map( (response: any) => response.items ))
    .pipe( map( (response: any) => response.map((item: any) => item.volumeInfo.title)))
  }

}
