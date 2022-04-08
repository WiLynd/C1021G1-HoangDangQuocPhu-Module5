import { Component, OnInit } from '@angular/core';
import {IWord} from '../model/word';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

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

  ngOnInit(): void {

  }

}
