import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey/survey.service';
import { Survey } from '../models/survey';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(
    private readonly surveyService: SurveyService,
  ) { }

  survey: Survey;

  ngOnInit() {
    // サーベイ結果を設定する
    this.survey = this.surveyService.survey;
  }

}
