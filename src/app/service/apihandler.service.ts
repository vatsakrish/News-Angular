import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApihandlerService {

  constructor(private httpclient: HttpClient) {

  }

  private API_KEY = 'd0b40bc0b87f4c82aff416c6d59ac3da';

  public getData(country: any, catg: any) {

    if (catg === '') {
      console.log('https://newsapi.org/v2/top-headlines?country='+country+'&apiKey=' + this.API_KEY);

      return this.httpclient.get('https://newsapi.org/v2/top-headlines?country='+country+'&apiKey=' + this.API_KEY);
    }
    else {
      console.log('https://newsapi.org/v2/top-headlines?country='+country+'&category=' + catg + '&apiKey=' + this.API_KEY);

      return this.httpclient.get('https://newsapi.org/v2/top-headlines?country='+country+'&category=' + catg + '&apiKey=' + this.API_KEY);
    }
  }
}
