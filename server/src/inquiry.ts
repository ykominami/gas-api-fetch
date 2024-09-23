import  { Appenv } from './appenv';

export class Inquiry {
  appenv: Appenv;
  name:string;
  email:string;
  inquiry:string;
  email_exp:RegExp;
  inquiry_exp:RegExp;
  sheet: GoogleAppsScript.Spreadsheet.Sheet | null;
  ss_id: string;
  sheet_name: string;

  constructor(e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent, appenv: Appenv){
    this.appenv = appenv;
    this.name = e.parameter.name ? e.parameter.name : "";
    this.email = e.parameter.email ? e.parameter.email : "";
    this.inquiry = e.parameter.inquiry ? e.parameter.inquiry : "";
    //エラー制御
    this.email_exp = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]+$/
    this.inquiry_exp = /^.{1,10}$/;
    this.ss_id = this.appenv.get_ss_id();
    this.sheet_name = this.appenv.get_sheet_name();
    this.sheet = null;
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
    // const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ss:GoogleAppsScript.Spreadsheet.Spreadsheet = SpreadsheetApp.openById(this.ss_id);
    const sheet: GoogleAppsScript.Spreadsheet.Sheet | null = ss.getSheetByName(this.sheet_name);

    if (sheet != null){
      //シートの一番下の行に追加
      sheet.appendRow([this.name, this.email, this.inquiry, "受付", new Date(), new Date()]);

      //応答
      // return ContentService.createTextOutput("受付けました。")
      return ContentService.createTextOutput(JSON.stringify({ "message": "success!" }));
    }
    else {
      return ContentService.createTextOutput(JSON.stringify({ "message":"" }));
    }
  }
}
