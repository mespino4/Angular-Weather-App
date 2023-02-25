import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherData } from '../models/weather.model';
import { Observable } from 'rxjs';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
<<<<<<< HEAD

  /*
=======
/*
  getWeatherData(cityName: string): Observable<weatherData>{
    return this.http.get<weatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('', cityName)
    })
  }
*/
>>>>>>> parent of db37e57 (update Images)
  getWeatherData(cityName: string): Observable<weatherData>{
    return this.http.get<weatherData>('https://tomorrow-io1.p.rapidapi.com/timelines?', {
      headers: new HttpHeaders()
      .set('X-RapidAPI-Host', 'tomorrow-io1.p.rapidapi.com')
      .set('X-RapidAPI-Key', '74c9549321msh7331cf855c97183p170f6ejsn3ed947922284'),
      params: new HttpParams()
      .set('location', '%7B%7B' + cityName + '%7D%7D&')
    })
  }
}
*/

  getWeatherData(cityName: string): Observable<weatherData>{
    return this.http.get<weatherData>
    ('https://api.tomorrow.io/v4/weather/realtime?location='
    + cityName + '&apikey=k7iIl3hRtrz6YVQnMgqdhsouSZoeKG3O', {})
    }
}