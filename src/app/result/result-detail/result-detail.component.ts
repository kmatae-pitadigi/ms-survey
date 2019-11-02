import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.scss']
})
export class ResultDetailComponent implements OnInit {

  constructor() { }

  /**
   * 回答
   */
  @Input() answer: string;

  /**
   * タイトル
   */
  @Input() title: string;

  /**
   * 解説
   */
  @Input() comment: string;

  ngOnInit() {
  }
}
