import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from './launch';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private url: string = 'https://api.spacexdata.com/v3/launches';

  constructor(private httpClient: HttpClient) {}

  public fetchLaunches(): Observable<Launch[]> {
    return this.httpClient.get<Launch[]>(this.url);
  }

  public fetchLaunch(flight_number: number): Observable<Launch> {
    return this.httpClient.get<Launch>(`${this.url}/${flight_number}`);
  }

  public fetchLaunchesByYear(year: number): Observable<Launch[]> {
    return this.httpClient.get<Launch[]>(`${this.url}?launch_year=${year}`);
  }
}
