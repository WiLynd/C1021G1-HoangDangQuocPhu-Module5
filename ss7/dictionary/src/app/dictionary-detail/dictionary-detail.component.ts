import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/word';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';


@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  iWord : IWord[] ;
  word = '';
  mean = '';

  constructor(private route: ActivatedRoute, iDictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.word = params.get('word');
      this.mean = params.get('mean');
    });
  }

}
