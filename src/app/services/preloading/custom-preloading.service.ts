import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadingService implements PreloadingStrategy {
  constructor() {}
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    //Check if a given route should be preloaded
    //To do so we check whether the given route has the data property and whether the data property has the preload property.
    //In our case, all modules to be preloaded do have the very same data and preload properties.
    //If true, we return the route of an Observable type through fn function, or return an observable of a null tpe.
    if (route.data && route.data['preload']) {
      return fn();
    } else {
      return of(null);
    }
  }
}
