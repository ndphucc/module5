import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {Word} from '../model/word';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  words: Word[];

  constructor(private dictionary: DictionaryService) {
    this.words = dictionary.getAll();
  }

  ngOnInit(): void {
  }

}
