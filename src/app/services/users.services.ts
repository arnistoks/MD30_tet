import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CharacterApiResponse } from "../models/character.model";
import { BehaviorSubject, catchError, finalize, Observable } from "rxjs";

@Injectable ({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'https://rickandmortyapi.com/api';
  loading = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<CharacterApiResponse> {
    this.loading.next(true);

    return this.http.get<CharacterApiResponse>(`${this.baseUrl}/character`).pipe(
      finalize(() => this.loading.next(false)),
      // catchError((error) => {
      //   console.log(error);
      //   throw error;
      // }),
    );
  }

  getLoading(): Observable<boolean> {
    console.log(this.loading)
    return this.loading.asObservable();
  }
}
