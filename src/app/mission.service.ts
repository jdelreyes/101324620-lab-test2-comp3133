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

  getLaunches(): Observable<Launch[]> {
    return this.httpClient.get<Launch[]>(this.url);
  }
}
