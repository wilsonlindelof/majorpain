import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'survey',
  styles: [``],
  templateUrl: 'survey.component.html'
})
export class SurveyComponent implements OnInit {

  public localState: any;
  public questions = [];
  public questionIndex = 0;
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        /**
         * Your resolved data from route.
         */
        this.localState = data.yourData;
      });

    console.log('hello `Survey` component');
    /**
     * static data that is bundled
     * var mockData = require('assets/mock-data/mock-data.json');
     * console.log('mockData', mockData);
     * if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
     */
    this.asyncDataWithWebpack();
  }
  public backQuestion() {
    if (this.questionIndex > 0) {
      this.questionIndex--;
    }
  }
  public forwardQuestion() {
    if (this.questionIndex < (this.questions.length - 1)) {
      this.questionIndex++;
    }
  }
  public selectAnswer(questionIndex, answerIndex) {
    this.questions[questionIndex].options[answerIndex].selected = !this.questions[questionIndex].options[answerIndex].selected;
  }
  private asyncDataWithWebpack() {
    /**
     * you can also async load mock data with 'es6-promise-loader'
     * you would do this if you don't want the mock-data bundled
     * remember that 'es6-promise-loader' is a promise
     */
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then((json) => {
          console.log('async mockData', json);
          this.localState = json;
        });

      System.import('../../assets/mock-data/no-branch-questions.json')
        .then((json) => {
          console.log('async questions', json);
          this.questions = json;
        });

    });
  }

}
