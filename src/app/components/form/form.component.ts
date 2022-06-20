import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CharacterQuery } from '../../models/character.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() searchCharactersEvent = new EventEmitter<CharacterQuery>();

  genderOptions = [
    {
      name: 'Female',
      value: 'female',
    },
    {
      name: 'Male',
      value: 'male',
    },
    {
      name: 'Genderless',
      value: 'genderless',
    },
    {
      name: 'Unknown',
      value: 'unknown',
    },
  ];

  charactersForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.charactersForm = this.fb.group({
      name: '',
      gender: '',
    });
  }

  searchCharacters(): void {
    if (this.charactersForm.valid) {
      this.searchCharactersEvent.emit({
        name: this.charactersForm.value.name,
        gender: this.charactersForm.value.gender,
      });
    }
  }
}


