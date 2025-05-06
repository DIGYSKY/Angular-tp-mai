import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface NasaImage {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiKey = '6uTqbxDgJtnBYB4Mm78hEPJScieZmhKnbAhgk4Rs';
  private baseUrl = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}

  getImageOfTheDay(): Observable<NasaImage> {
    return this.http.get<NasaImage>(`${this.baseUrl}?api_key=${this.apiKey}`);
  }

  getImageByDate(date: string): Observable<NasaImage> {
    return this.http.get<NasaImage>(`${this.baseUrl}?api_key=${this.apiKey}&date=${date}`);
  }

  getImagesByDateRange(startDate: string, endDate: string): Observable<NasaImage[]> {
    return this.http.get<NasaImage[]>(
      `${this.baseUrl}?api_key=${this.apiKey}&start_date=${startDate}&end_date=${endDate}`
    );
  }
} 