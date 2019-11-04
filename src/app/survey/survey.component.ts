import { Component, OnInit } from '@angular/core';
import { SurveyInput } from '../models/survey-input';
import { SurveyService} from './survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  constructor(
    private readonly surveyService: SurveyService,
    private readonly router: Router,
  ) { }

  /**
   * 回答
   */
  survey: SurveyInput = new SurveyInput();

  /**
   * サーベイID
   */
  id: string;

  /**
   * サブミットフラグ
   */
  submitted = false;

  /**
   * エラーメッセージ
   */
  errorMessage: string = undefined;

  /**
   * 初期化処理
   */
  ngOnInit() {
  }

  /**
   * Submit処理
   */
  async onSubmit() {
    // サブミットフラグを設定する
    this.submitted = true;
    // エラーメッセージを初期化する
    this.errorMessage = undefined;

    try {
      // サーベイを保存する
      await this.surveyService.save(this.survey);

      // 診断結果ページに遷移する
      this.router.navigateByUrl('result');
    } catch (error) {
      this.errorMessage = error.message;
    }
  }
}
