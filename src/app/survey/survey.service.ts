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
      motivationKey
      motivationComment
      cleanDesk
      cleanDeskKey
      cleanDeskComment
      manual
      manualKey
      manualComment
      timeManagement
      timeManagementKey
      timeManagementComment
      telework
      teleworkKey
      teleworkComment
      communication
      communicationKey
      communicationComment
      informationSharing
      informationSharingKey
      informationSharingComment
      workflow
      workflowKey
      workflowComment
      customerManagement
      customerManagementKey
      customerManagementComment
      profitManagement
      profitManagementKey
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

        if (ret.save.result === 'ERROR') {
          reject({
              message: ret.save.message,
          });
        } else {
          this.survey = new Survey();

          this.survey.motivation = ret.save.survey.motivation;
          this.survey.motivationKey = ret.save.survey.motivationKey;
          this.survey.motivationComment = ret.save.survey.motivationComment;

          this.survey.cleanDesk = ret.save.survey.cleanDesk;
          this.survey.cleanDeskKey = ret.save.survey.cleanDeskKey;
          this.survey.cleanDeskComment = ret.save.survey.cleanDeskComment;

          this.survey.manual = ret.save.survey.manual;
          this.survey.manualKey = ret.save.survey.manualKey;
          this.survey.manualComment = ret.save.survey.manualComment;

          this.survey.timeManagement = ret.save.survey.timeManagement;
          this.survey.timeManagementKey = ret.save.survey.timeManagementKey;
          this.survey.timeManagementComment = ret.save.survey.timeManagementComment;

          this.survey.telework = ret.save.survey.telework;
          this.survey.teleworkKey = ret.save.survey.teleworkKey;
          this.survey.teleworkComment = ret.save.survey.teleworkComment;

          this.survey.communication = ret.save.survey.communication;
          this.survey.communicationKey = ret.save.survey.communicationKey;
          this.survey.communicationComment = ret.save.survey.communicationComment;

          this.survey.informationSharing = ret.save.survey.informationSharing;
          this.survey.informationSharingKey = ret.save.survey.informationSharingKey;
          this.survey.informationSharingComment = ret.save.survey.informationSharingComment;

          this.survey.workflow = ret.save.survey.workflow;
          this.survey.workflowKey = ret.save.survey.workflowKey;
          this.survey.workflowComment = ret.save.survey.workflowComment;

          this.survey.customerManagement = ret.save.survey.customerManagement;
          this.survey.customerManagementKey = ret.save.survey.customerManagementKey;
          this.survey.customerManagementComment = ret.save.survey.customerManagementComment;

          this.survey.profitManagement = ret.save.survey.profitManagement;
          this.survey.profitManagementKey = ret.save.survey.profitManagementKey;
          this.survey.profitManagementComment = ret.save.survey.profitManagementComment;

          resolve(this.survey);
        }
      }, (error) => {
        reject(error);
      });
    });
  }
}
