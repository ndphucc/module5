import {Injectable} from '@angular/core';
import {Word} from '../model/word';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Word[] = [];

  constructor() {
    this.words.push({
        id: 1,
        vietName: 'Xin chao',
        english: 'Hello'
      },
      {
        id: 2,
        vietName: 'Con mèo',
        english: 'Cat'
      },
      {
        id: 1,
        vietName: 'Con chó',
        english: 'Dog'
      }
    );
  }

  getAll(): Word[] {
    return this.words;
  }

  finById(id: number): Word {
    return this.words.find(element => element.id == id);
  }
}
