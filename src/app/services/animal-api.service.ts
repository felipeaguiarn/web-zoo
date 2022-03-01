import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalApiService {


apiURL = "https://zoo-animal-api.herokuapp.com/animals/rand/10"

constructor(private http: HttpClient) { }

ngOnInit(): void {
}

get apiListAllAnimals(): Observable<any>{
  return this.http.get<any[]>(this.apiURL)
}


}
