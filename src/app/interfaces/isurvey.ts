import { ISurveyInput } from './isurvey-input';

export interface ISurvey extends ISurveyInput {
    id: string;

    motivationValue: string;
    motivationComment: string;

    cleanDeskValue: string;
    cleanDeskComment: string;

    manualValue: string;
    manualComment: string;

    timeManagementValue: string;
    timeManagementComment: string;

    teleworkValue: string;
    teleworkComment: string;

    communicationValue: string;
    communicationComment: string;

    informationSharingValue: string;
    informationSharingComment: string;

    workflowValue: string;
    workflowComment: string;

    customerManagementValue: string;
    customerManagementComment: string;

    profitManagementValue: string;
    profitManagementComment: string;
}
