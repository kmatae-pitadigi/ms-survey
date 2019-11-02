import { ISurvey } from '../interfaces/isurvey';
import { SurveyInput } from './survey-input';

export class Survey extends SurveyInput implements ISurvey {
    id: string;

    // 社員はやる気に満ちており、元気に働いている
    motivation: string;
    get motivationValue(): string {
        return this.motivation === 'yes' ? 'はい' : 'いいえ';
    }

    // 机の上、机の周りはきれいに整頓されている
    cleanDesk: string;
    get cleanDeskValue(): string {
        return this.cleanDesk  === 'yes' ? 'はい' : 'いいえ';
    }

    // 社内の業務はマニュアル化しており、必要な社員で共有できている
    manual: string;
    get manualValue(): string {
        return this.manual  === 'yes' ? 'はい' : 'いいえ';
    }

    // 業務にかかっている時間を把握し、改善に活かしている
    timeManagement: string;
    get timeManagementValue(): string {
        return this.timeManagement  === 'yes' ? 'はい' : 'いいえ';
    }

    // テレワーク、在宅ワークができる環境を整備し、実際に利用している社員がいる
    telework: string;
    get teleworkValue(): string {
        return this.telework  === 'yes' ? 'はい' : 'いいえ';
    }

    // 社員同士の連絡は、主に「○○○」で行うことが多い
    communication: string;
    get communicationValue(): string {
        let ret: string;
        switch (this.communication) {
        case 'phone':
            ret = '電話';
            break;
        case 'mail':
            ret = 'メール';
            break;
        case 'chat':
            ret = 'SNS/チャット';
            break;
        }

        return ret;
    }

    // 社内の情報は、主に「○○○」で共有している
    informationSharing: string;
    get informationSharingValue(): string {
        let ret: string;
        switch (this.informationSharing) {
        case 'paper':
            ret = '手書きのメモ、紙';
            break;
        case 'fileserver':
            ret = 'ファイルサーバー';
            break;
        case 'mail':
            ret = 'メール';
            break;
        case 'portal':
            ret = 'ポータル';
            break;
        case 'chat':
            ret = 'SNS、チャット';
            break;
        case 'storage':
            ret = 'ストレージサービス';
            break;
        }

        return ret;
    }

    // 社内手続は、主に「○○○」で行っている
    workflow: string;
    get workflowValue(): string {
        let ret: string;
        switch (this.workflow) {
        case 'paper':
            ret = '手書きの紙';
            break;
        case 'excel':
            ret = 'ExcelまたはWord';
            break;
        case 'workflow':
            ret = 'ワークフローサービス';
            break;
        }

        return ret;
    }

    // 顧客情報は、顧客の属性、顧客に付随する情報(案件、問合せなど)を含め一元管理できている
    customerManagement: string;
    get customerManagementValue(): string {
        return this.customerManagement  === 'yes' ? 'はい' : 'いいえ';
    }

    // 売上、経費、利益の状況は最新をすぐに確認できるようになっている
    profitManagement: string;
    get profitManagementValue(): string {
        return this.profitManagement  === 'yes' ? 'はい' : 'いいえ';
    }
}
