import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ErrorHandlerService {
  handleErrorAndThrow<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      if (error.status === 401) {
        alert('Unauthorized. Please log in again.');
      }
      return throwError(error);
    };
  }
}
