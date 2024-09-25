import { Inquiry } from './inquiry';
import { Listx } from './listx';

export class Webapp {

  listx_test(): void {
    Listx.listx_test()
  }
  listx_test_2(): void {
    Listx.listx_test_2()
  }
  inquiry_test(): void {
    Inquiry.inquiry_test()
  }
  inquiry_test_2(): void {
    Inquiry.inquiry_test_2()
  }
  do0(e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent): GASHtmlTextOutputType {
    //値の受け取り
    let content: GASHtmlTextOutputType;
    const cmd:string = e.parameter.cmd ? e.parameter.cmd : "";
    switch(cmd){
      case "inquiry":
        const inquiry_assoc = Inquiry.query_parse(e)
        content = Inquiry.inquiry_main(inquiry_assoc);
        break;
      case "listx":
        const listx_assoc = Listx.query_parse(e)
        content = Listx.listx_main(listx_assoc)
       break;
      default:
        content = ContentService.createTextOutput(`cmd=default cmd=${cmd}`)
    }
    return content;
  }

  doGetx(e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent): GASHtmlTextOutputType {
    return this.do0(e)
  }

  doPostx(e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent): GASHtmlTextOutputType {
     return this.do0(e)
  }
}

