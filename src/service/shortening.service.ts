import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globalconstants } from 'src/app/globalconstants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShorteningService {

  constructor(private httpClient: HttpClient) { }

  createShortenURL(shortening: any): Observable<any> {
    const url = Globalconstants.baseUrl + '/createShortenURL';
    return this.httpClient.post(url, shortening);
  }

  getOriginalURL(path: any): Observable<any> {
    const url = Globalconstants.baseUrl + '/getOriginalURL/' + path;
    return this.httpClient.get(url);
  }
}
