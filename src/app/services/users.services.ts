import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Character, CharacterApiResponse } from "../models/character.model";
import { BehaviorSubject, finalize, Observable } from "rxjs";
import { LocationApiResponse } from "../models/locations.model";

@Injectable ({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'https://rickandmortyapi.com/api/character/';
  loading = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
  }

  getCharacters(name: string, gender: string): Observable<CharacterApiResponse> {
    this.loading.next(true);

    return this.http.get<CharacterApiResponse>(`${this.baseUrl}?name=${name}&gender=${gender}`).pipe(
      finalize(() => this.loading.next(false)),
      // catchError((error) => {
      //   console.log(error);
      //   throw error;
      // }),
    );
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/character/${id}`)
  }

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  getLocations(): Observable<LocationApiResponse> {
    return this.http.get<LocationApiResponse>(`${this.baseUrl}/location`);
  }
}
