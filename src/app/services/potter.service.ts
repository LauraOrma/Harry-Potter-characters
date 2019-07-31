import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Models
import { Character } from '../model/character';
import { Wand } from '../model/wand';
import { CharacterDto } from '../model/character-dto';

@Injectable()
export class PotterService {

  apiURL = 'http://hp-api.herokuapp.com/api/';
  apiKey = '$2a$10$D.aq1omFO5pmeg9/5b8uO.FHez9fkR.JgASgpV42pyjNuy3goG.MO';

  constructor(private _http: HttpClient) {
  }

  characters(): Observable<Character[]> {
    return this._http.get(`${this.apiURL}characters`)
      .pipe(
        map( (characters: CharacterDto[]) => {
          return characters.map( (character: CharacterDto ) => {
            const wand = new Wand(character.wand.wood, character.wand.length, character.wand.core);
            return new Character (
              character.name,
              character.image,
              character.house,
              character.hogwartsStaff,
              character.dateOfBirth,
              character.actor,
              character.alive,
              wand);
          });
        })
      );
  }
}

