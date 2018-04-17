import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { SurveyComponent } from './survey.component';

describe('Survey', () => {
  /**
   * Provide our implementations or mocks to the dependency injector
   */
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      /**
       * Provide a better mock.
       */
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      AboutComponent
    ]
  }));

  it('should log ngOnInit', inject([AboutComponent], (survey: SurveyComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    survey.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
