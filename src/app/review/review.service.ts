import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AppInfo } from './app-info.model';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAppsInfo(): Observable<AppInfo[]> {
    return this.http.get<AppInfo[]>(`${this.apiUrl}/api/reviews`)
          .pipe(
            catchError(this.handleError('getAppInfo', []))
          );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
