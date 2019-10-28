import { Component, OnInit } from '@angular/core';
import { Survey } from '../models/survey';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const saveSurvey = gql`
  mutation saveSurvey($survey: Survey!) {
    saveSurvey(survey: $survey) {
      result
      message
      survey
    }
  }
`;

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  constructor(
    private readonly apollo: Apollo,
  ) { }

  /**
   * 回答
   */
  survey: Survey = new Survey();

  /**
   * サブミットフラグ
   */
  submitted = false;

  /**
   * 初期化処理
   */
  ngOnInit() {
  }

  /**
   * Submit処理
   */
  onSubmit() {
    // サブミットフラグを設定する
    this.submitted = true;
  }
}
