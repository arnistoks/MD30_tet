import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character, CharacterQuery } from "../../models/character.model";
import { UsersService } from "../../services/users.services";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  // characters: Character[] | undefined;
  characters?: Character[];
  // charactersSubscription: Subscription | undefined;
  charactersSubscription?: Subscription;
  loading$: Observable<boolean> | undefined;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.charactersSubscription = this.usersService.getCharacters('', '').subscribe((charactersData) => {
      this.characters = charactersData.results;
    });
    this.loading$ = this.usersService.getLoading();
  }

  ngOnDestroy(): void {
    this.charactersSubscription?.unsubscribe();
  }

  searchCharacter(characterQuery: CharacterQuery): void {
    this.characters = [] as Character[];

    this.charactersSubscription = this.usersService
      .getCharacters(characterQuery.name, characterQuery.gender)
      .subscribe((charactersData) => {
        this.characters = charactersData.results;
      });
  }
}
