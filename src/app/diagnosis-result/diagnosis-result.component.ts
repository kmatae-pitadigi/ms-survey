import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey/survey.service';

@Component({
  selector: 'app-diagnosis-result',
  templateUrl: './diagnosis-result.component.html',
  styleUrls: ['./diagnosis-result.component.scss']
})
export class DiagnosisResultComponent implements OnInit {

  constructor(
    private readonly surveyService: SurveyService,
  ) { }

  ngOnInit() {
  }

}
