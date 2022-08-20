import {Component, OnInit} from '@angular/core';
import {Word} from '../model/word';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  word: Word;

  constructor(private activateRouter: ActivatedRoute, private dictionaryService: DictionaryService) {
    activateRouter.paramMap.subscribe((paramMap: ParamMap) => {
        this.word = dictionaryService.finById(parseInt(paramMap.get('id')));
      }
    );
  }

  ngOnInit(): void {
  }

}
