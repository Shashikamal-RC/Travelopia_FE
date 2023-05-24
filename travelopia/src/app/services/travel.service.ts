import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {TravelElement} from '../interfaces/travelItem.interface'

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  constructor(private http: HttpClient) {}

  baseURL: string = environment.baseURL;

  getLocations = () => {
    return this.http.get(`${this.baseURL}location/`);
  };

  getTravelProfiles() {
    return this.http.get(`${this.baseURL}traveller/`);
  }

  createTravelProfile(travel: TravelElement) {
    return this.http.post(`${this.baseURL}traveller/`, travel);
  }
}
