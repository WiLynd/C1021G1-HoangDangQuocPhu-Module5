import { Injectable } from '@angular/core';
import {IWord} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  iWords: IWord [] =[{
    word: 'Hello',
    mean: 'Xin chào'
  },{
    word: 'House',
    mean: 'Nhà'
  },{
    word: 'Table',
    mean: 'Bàn'
  }
  ];

  constructor() { }

  translate(word: string): IWord{
    return this.iWords.find(IWord => IWord.word === word)
  }
}
