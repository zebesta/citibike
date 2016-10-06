import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Addresses } from './addresses';



@Injectable()
export class CitibikeService {

  constructor(
    private http: Http
  ) { }

  private citibikeStationsUrl = 'https://feeds.citibikenyc.com/stations/stations.json';
  private testUrl = 'http://localhost:3000/helloworld';
  private serverUrl = 'http://localhost:3000';

  private extractData(res: Response){
    console.log("Extract data is reading: " + res);
    let body = res.json();
    // return body.data || { };
    return body;
  }

  private handleError (error: any) {
    console.log("Error!!! " + error);
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

  getStations(): Promise<{}> {
    console.log("Trying to get stations from service!");

    return this.http.get(this.citibikeStationsUrl)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
  }
  getSomething(): Promise<any>{
    console.log("Trying to get something from service!");
    // console.log(this.http.get(this.testUrl));

    return this.http.get(this.testUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  getAddress(start, end): Promise<any>{
    console.log("Trying to get address from service!");
    // console.log(this.http.get(this.testUrl));
    // var fullUrl = this.serverUrl + '/address/' + address;

    return this.http.get(this.serverUrl+'/start/'+start + '/end/' + end)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  getTravelTimes(addresses): Promise<any>{
    console.log("Trying to get travel times from service!");
    return this.http.get(this.serverUrl+'/startll/' + addresses.startLatLng + '/endll' + addresses.endLatLng)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }


}
