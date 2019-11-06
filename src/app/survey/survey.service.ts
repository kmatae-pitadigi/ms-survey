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
      motivationRate
      motivationComment
      cleanDesk
      cleanDeskRate
      cleanDeskComment
      manual
      manualRate
      manualComment
      timeManagement
      timeManagementRate
      timeManagementComment
      telework
      teleworkRate
      teleworkComment
      communication
      communicationRate
      communicationComment
      informationSharing
      informationSharingRate
      informationSharingComment
      workflow
      workflowRate
      workflowComment
      customerManagement
      customerManagementRate
      customerManagementComment
      profitManagement
      profitManagementRate
      profitManagementComment
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

  survey: Survey = undefined;

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

        if (ret.save.result === 'ERROR') {
          reject({
              message: ret.save.message,
          });
        } else {
          this.survey = new Survey();

          this.survey.motivation = ret.save.survey.motivation;
          this.survey.motivationRate = ret.save.survey.motivationRate;
          this.survey.motivationComment = ret.save.survey.motivationComment;

          this.survey.cleanDesk = ret.save.survey.cleanDesk;
          this.survey.cleanDeskRate = ret.save.survey.cleanDeskRate;
          this.survey.cleanDeskComment = ret.save.survey.cleanDeskComment;

          this.survey.manual = ret.save.survey.manual;
          this.survey.manualRate = ret.save.survey.manualRate;
          this.survey.manualComment = ret.save.survey.manualComment;

          this.survey.timeManagement = ret.save.survey.timeManagement;
          this.survey.timeManagementRate = ret.save.survey.timeManagementRate;
          this.survey.timeManagementComment = ret.save.survey.timeManagementComment;

          this.survey.telework = ret.save.survey.telework;
          this.survey.teleworkRate = ret.save.survey.teleworkRate;
          this.survey.teleworkComment = ret.save.survey.teleworkComment;

          this.survey.communication = ret.save.survey.communication;
          this.survey.communicationRate = ret.save.survey.communicationRate;
          this.survey.communicationComment = ret.save.survey.communicationComment;

          this.survey.informationSharing = ret.save.survey.informationSharing;
          this.survey.informationSharingRate = ret.save.survey.informationSharingRate;
          this.survey.informationSharingComment = ret.save.survey.informationSharingComment;

          this.survey.workflow = ret.save.survey.workflow;
          this.survey.workflowRate = ret.save.survey.workflowRate;
          this.survey.workflowComment = ret.save.survey.workflowComment;

          this.survey.customerManagement = ret.save.survey.customerManagement;
          this.survey.customerManagementRate = ret.save.survey.customerManagementRate;
          this.survey.customerManagementComment = ret.save.survey.customerManagementComment;

          this.survey.profitManagement = ret.save.survey.profitManagement;
          this.survey.profitManagementRate = ret.save.survey.profitManagementRate;
          this.survey.profitManagementComment = ret.save.survey.profitManagementComment;

          resolve(this.survey);
        }
      }, (error) => {
        reject(error);
      });
    });
  }
}
