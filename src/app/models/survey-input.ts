import { ISurveyInput } from '../interfaces/isurvey-input';

export class SurveyInput implements ISurveyInput {
    // 社員はやる気に満ちており、元気に働いている
    motivation: string;
    get motivationTitle(): string {
        return '社員はやる気に満ちており、元気に働いている';
    }

    // 机の上、机の周りはきれいに整頓されている
    cleanDesk: string;
    get cleanDeskTitle(): string {
        return '机の上、机の周りはきれいに整頓されている';
    }

    // 社内の業務はマニュアル化しており、必要な社員で共有できている
    manual: string;
    get manualTitle(): string {
        return '社内の業務はマニュアル化しており、必要な社員で共有できている';
    }

    // 業務にかかっている時間を把握し、改善に活かしている
    timeManagement: string;
    get timeManagementTitle(): string {
        return '業務にかかっている時間を把握し、改善に活かしている';
    }

    // テレワーク、在宅ワークができる環境を整備し、実際に利用している社員がいる
    telework: string;
    get teleworkTitle(): string {
        return 'テレワーク、在宅ワークができる環境を整備し、実際に利用している社員がいる';
    }

    // 社員同士の連絡は、主に「○○○」で行うことが多い
    communication: string;
    get communicationTitle(): string {
        return '社員同士の連絡は、主に「○○○」で行うことが多い';
    }

    // 社内の情報は、主に「○○○」で共有している
    informationSharing: string;
    get informationSharingTitle(): string {
        return '社内の情報は、主に「○○○」で共有している';
    }

    // 社内手続は、主に「○○○」で行っている
    workflow: string;
    get workflowTitle(): string {
        return '社内手続は、主に「○○○」で行っている';
    }

    // 顧客情報は、顧客の属性、顧客に付随する情報(案件、問合せなど)を含め一元管理できている
    customerManagement: string;
    get customerManagementTitle(): string {
        return '顧客情報は、顧客の属性、顧客に付随する情報(案件、問合せなど)を含め一元管理できている';
    }

    // 売上、経費、利益の状況は最新をすぐに確認できるようになっている
    profitManagement: string;
    get profitManagementTitle(): string {
        return '売上、経費、利益の状況は最新をすぐに確認できるようになっている';
    }
}
