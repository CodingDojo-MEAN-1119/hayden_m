import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { templateJitUrl } from '@angular/compiler';


@Injectable({
  providedIn: 'root'

export class HttpService {
  constructor(private _http: HttpClient){}
}
getNames() {
  let tempObservable = this._http.get('/1955');
  tempObservable.subscribe(data => console.log("Got our data", data));
}

export class HttpService {
  constructor(private _http: HttpClient){
      this.getNames();
  }
}

