import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class Globalconstants {
  //api url
  public static baseUrl = environment.baseUrl;
}
