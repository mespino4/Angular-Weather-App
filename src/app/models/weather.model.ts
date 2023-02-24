export interface weatherData {
  "data": {
    "time": "2023-02-24T03:07:00Z",
    "values": {
      "cloudBase": 0.23,
      "cloudCeiling": 0.23,
      "cloudCover": 99,
      "dewPoint": 21.5,
      "freezingRainIntensity": 0,
      "humidity": 90,
      "precipitationProbability": 0,
      "pressureSurfaceLevel": 1015.35,
      "rainIntensity": 0,
      "sleetIntensity": 0,
      "snowIntensity": 0,
      "temperature": 23.63,
      "temperatureApparent": 23.63,
      "uvHealthConcern": 0,
      "uvIndex": 0,
      "visibility": 13.75,
      "weatherCode": 1001,
      "windDirection": 138.63,
      "windGust": 4,
      "windSpeed": 1.19
    }
  },
  "location": {
    "lat": 29.75893783569336,
    "lon": -95.3676986694336,
    "name": "Houston, Harris County, Texas, United States",
    "type": "administrative"
  }
}

/*
export interface weatherData {
    coord: Coord
    weather: Weather[]
    base: string
    main: Main
    visibility: number
    wind: Wind
    clouds: Clouds
    dt: number
    sys: Sys
    timezone: number
    id: number
    name: string
    cod: number
  }
  
  export interface Coord {
    lon: number
    lat: number
  }
  
  export interface Weather {
    id: number
    main: string
    description: string
    icon: string
  }
  
  export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  
  export interface Wind {
    speed: number
    deg: number
    gust: number
  }
  
  export interface Clouds {
    all: number
  }
  
  export interface Sys {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  */