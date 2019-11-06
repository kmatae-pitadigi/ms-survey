import { ISurveyInput } from './isurvey-input';

export interface ISurvey extends ISurveyInput {
    id: string;

    motivationValue: string;
    motivationComment: string;
    motivationRate: number;

    cleanDeskValue: string;
    cleanDeskComment: string;
    cleanDeskRate: number;

    manualValue: string;
    manualComment: string;
    manualRate: number;

    timeManagementValue: string;
    timeManagementComment: string;
    timeManagementRate: number;

    teleworkValue: string;
    teleworkComment: string;
    teleworkRate: number;

    communicationValue: string;
    communicationComment: string;
    communicationRate: number;

    informationSharingValue: string;
    informationSharingComment: string;
    informationSharingRate: number;

    workflowValue: string;
    workflowComment: string;
    workflowRate: number;

    customerManagementValue: string;
    customerManagementComment: string;
    customerManagementRate: number;

    profitManagementValue: string;
    profitManagementComment: string;
    profitManagementRate: number;
}
