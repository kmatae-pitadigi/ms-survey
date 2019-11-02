import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ISurveyInput } from '../interfaces/isurvey-input';
import { ISurvey } from '../interfaces/isurvey';
import { Survey } from '../models/survey';

const saveSurvey = gql`
mutation save($survey: SurveyInput!) {
  save(survey: $survey) {
    result
    message
    survey {
      id
      motivation
      cleanDesk
      manual
      timeManagement
      telework
      communication
      informationSharing
      workflow
      customerManagement
      profitManagement
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(
    private readonly apollo: Apollo,
    ) { }

  survey: Survey;

  async save(surveyInput: ISurveyInput): Promise<ISurvey> {
    return new Promise((resolve, reject) => {
      // APIにサーベイ情報を保存する
      this.apollo.mutate({
        mutation: saveSurvey,
        variables: {
          survey: surveyInput,
        }
      }).subscribe(({data}) => {
        const ret: any = data;
        this.survey = new Survey();
        this.survey.motivation = ret.save.survey.motivation;
        this.survey.cleanDesk = ret.save.survey.cleanDesk;
        this.survey.manual = ret.save.survey.manual;
        this.survey.timeManagement = ret.save.survey.timeManagement;
        this.survey.telework = ret.save.survey.telework;
        this.survey.communication = ret.save.survey.communication;
        this.survey.informationSharing = ret.save.survey.informationSharing;
        this.survey.workflow = ret.save.survey.workflow;
        this.survey.customerManagement = ret.save.survey.customerManagement;
        this.survey.profitManagement = ret.save.survey.profitManagement;
        resolve(this.survey);
      }, (error) => {
        reject(error);
      });
    });
  }
}
