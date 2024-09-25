import  { Appenv } from './appenv';
import  { Infox } from './infox';

export class Inquiry {
  name:string = "";
  email:string = "";
  inquiry:string = "";
  email_exp:RegExp;
  inquiry_exp:RegExp;
  // sheet: GoogleAppsScript.Spreadsheet.Sheet | null;
  ss_id: string;
  sheet_name: string;
  infox: Infox | null;

  static query_parse(e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent): InquiryQueryAssocType {
    const assoc:InquiryQueryAssocType = {"name":"", "email":"", "inquiry":"", "test": -1}
    assoc["name"] = e.parameter.name ? e.parameter.name : "";
    assoc["email"] = e.parameter.email ? e.parameter.email : "";
    assoc["inquiry"] = e.parameter.inquiry ? e.parameter.inquiry : "";

    return assoc
  }
  static inquiry_main(assoc:InquiryQueryAssocType): GASHtmlTextOutputType {
    const inquiry = new Inquiry(assoc);
    return inquiry.register();
  }
  static inquiry_test():void {
    let assoc: InquiryQueryAssocType = {"name":"john", "email":"john@abc.com", "inquiry":"といあわせ","test": -10}

    Inquiry.inquiry_main(assoc)
}
  static inquiry_test_2():void {
    let assoc: InquiryQueryAssocType = {"name":"Adam", "email":"adam@def.com", "inquiry":"問合せ","test": -10}

    Inquiry.inquiry_main(assoc)
  }

  constructor(assoc:InquiryQueryAssocType){
    if( typeof assoc["name"] === "string"){
      this.name = assoc["name"];
    }
    if( typeof assoc["email"] === "string"){
      this.email = assoc["email"];
    }
    if( typeof assoc["inquiry"] === "string"){
      this.inquiry = assoc["inquiry"];
    }
    //エラー制御
    this.email_exp = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]+$/
    this.inquiry_exp = /^.{1,10}$/;
    this.ss_id = Appenv.get_ss_id();
    this.sheet_name = Appenv.get_sheet_name();
    this.infox = new Infox(this.ss_id, this.sheet_name)
  }
  validate():string {
    if(this.name == ""){
      // return ContentService.createTextOutput("エラー1です。")
      return "validation error1!";
    }
    //スプレッドシートの準備
    if(!this.email_exp.test(this.email)){
      // return ContentService.createTextOutput("エラー2です。")
      return "validation error!2";
    }
    if(!this.inquiry_exp.test(this.inquiry)){
      // return ContentService.createTextOutput("エラー3です。")
      return "validation error3!";
    }
    return "";
  }

  register(): GASHtmlTextOutputType {
    //問題があればエラーを返す（なければ処理を継続）
    const message = this.validate();
    if (message != ""){
      return ContentService.createTextOutput(JSON.stringify({ "message": message }));
    }
    if( this.infox !== null){
      this.infox.appendRow([this.name, this.email, this.inquiry, "受付", new Date(), new Date()]);
    }
    //応答
    return ContentService.createTextOutput(JSON.stringify({ "message": "success!" }));
  }
}
