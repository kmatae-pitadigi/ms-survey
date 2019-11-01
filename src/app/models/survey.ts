import { ISurvey } from '../interfaces/isurvey';
import { ISurveyInput } from '../interfaces/isurvey-input';

export class Survey implements ISurvey {
    id: string;

    // 社員はやる気に満ちており、元気に働いている
    private MOTIVATION: string;
    get motivation(): string {
        return this.MOTIVATION === 'yes' ? 'はい' : 'いいえ';
    }
    set motivation(value: string) {
        this.MOTIVATION = value;
    }

    // 机の上、机の周りはきれいに整頓されている
    private CLEAN_DESK: string;
    get cleanDesk(): string {
        return this.CLEAN_DESK  === 'yes' ? 'はい' : 'いいえ';
    }
    set cleanDesk(value: string) {
        this.CLEAN_DESK = value;
    }

    // 社内の業務はマニュアル化しており、必要な社員で共有できている
    private MANUAL: string;
    get manual(): string {
        return this.MANUAL  === 'yes' ? 'はい' : 'いいえ';
    }
    set manual(value: string) {
        this.MANUAL = value;
    }

    // 業務にかかっている時間を把握し、改善に活かしている
    private TIME_MANAGEMENT: string;
    get timeManagement(): string {
        return this.TIME_MANAGEMENT  === 'yes' ? 'はい' : 'いいえ';
    }
    set timeManagement(value: string) {
        this.TIME_MANAGEMENT = value;
    }

    // テレワーク、在宅ワークができる環境を整備し、実際に利用している社員がいる
    private TELEWORK: string;
    get telework(): string {
        return this.TELEWORK  === 'yes' ? 'はい' : 'いいえ';
    }
    set telework(value: string) {
        this.TELEWORK = value;
    }

    // 社員同士の連絡は、主に「○○○」で行うことが多い
    private COMMUNICATION: string;
    get communication(): string {
        let ret: string;
        switch (this.COMMUNICATION) {
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
    set communication(value: string) {
        this.COMMUNICATION = value;
    }

    // 社内の情報は、主に「○○○」で共有している
    private INFORMATION_SHARING: string;
    get informationSharing(): string {
        let ret: string;
        switch (this.INFORMATION_SHARING) {
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
    set informationSharing(value: string) {
        this.INFORMATION_SHARING = value;
    }

    // 社内手続は、主に「○○○」で行っている
    private WORKFLOW: string;
    get workflow(): string {
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
    set workflow(value: string) {
        this.WORKFLOW = value;
    }

    // 顧客情報は、顧客の属性、顧客に付随する情報(案件、問合せなど)を含め一元管理できている
    private CUSTOMER_MANAGEMENT: string;
    get customerManagement(): string {
        return this.CUSTOMER_MANAGEMENT  === 'yes' ? 'はい' : 'いいえ';
    }
    set customerManagement(value: string) {
        this.CUSTOMER_MANAGEMENT = value;
    }

    // 売上、経費、利益の状況は最新をすぐに確認できるようになっている
    private PROFIT_MANAGEMENT: string;
    get profitManagement(): string {
        return this.PROFIT_MANAGEMENT  === 'yes' ? 'はい' : 'いいえ';
    }
    set profitManagement(value: string) {
        this.PROFIT_MANAGEMENT = value;
    }
}
