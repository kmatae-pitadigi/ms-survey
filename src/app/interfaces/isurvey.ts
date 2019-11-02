import { ISurveyInput } from './isurvey-input';

export interface ISurvey extends ISurveyInput {
    id: string;
    motivationValue: string;
    cleanDeskValue: string;
    manualValue: string;
    timeManagementValue: string;
    teleworkValue: string;
    communicationValue: string;
    informationSharingValue: string;
    workflowValue: string;
    customerManagementValue: string;
    profitManagementValue: string;
}
