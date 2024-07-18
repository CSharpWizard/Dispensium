import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class DispensaryService {
  constructor(private http: HttpClient) {}
  url: string = '../../../assets/dispensaries.json';
  getDispensaries(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getDispensary(slug: string): Observable<any> {
    return this.http.get<any[]>(this.url).pipe(
      map((dispensaries) => {
        const dispensary = dispensaries.find((d) => d.Slug === slug);
        if (!dispensary) {
          throw { status: 404, message: 'Dispensary not found' };
        }
        return dispensary;
      }),
      catchError((error) => {
        return throwError(() => new Error(error.message || 'Server error'));
      })
    );
  }
}
