import { Inquiry } from './inquiry';
import { Listx } from './listx';

export class Webapp {

  listx_test(): GASHtmlTextOutputType {
    return Listx.listx_main()
  }
  do0(e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent): GASHtmlTextOutputType {
    //値の受け取り
    let content: GASHtmlTextOutputType;
    const cmd:string = e.parameter.cmd ? e.parameter.cmd : "";
    switch(cmd){
      case "inquiry":
        const inquiry = new Inquiry(e);
        content = inquiry.register();
        break;
      case "listx":
        content = Listx.listx_main()
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

