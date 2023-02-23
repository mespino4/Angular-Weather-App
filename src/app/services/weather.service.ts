import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityName: string): Observable<weatherData>{
    return this.http.get<weatherData>('https://open-weather13.p.rapidapi.com/city/' + cityName, {
      headers: new HttpHeaders()
      .set('X-RapidAPI-Host', 'open-weather13.p.rapidapi.com')
      .set('X-RapidAPI-Key', '74c9549321msh7331cf855c97183p170f6ejsn3ed947922284'),
    })
  }
}