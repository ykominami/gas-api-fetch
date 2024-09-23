import { Inquiry } from './inquiry';
import { Listx } from './listx';
import { Appenv } from './appenv';
import { Infox } from './infox';

export class Webapp {
  appenv: Appenv;
  constructor(){
    this.appenv = new Appenv();
  }
  listx_test():void {
    Listx.listx_main(this.appenv)
  }
  do0(e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent): GASHtmlTextOutputType {
    //値の受け取り
    let content: GASHtmlTextOutputType;
    const cmd:string = e.parameter.cmd ? e.parameter.cmd : "";
    switch(cmd){
      case "inquiry":
        const inquiry = new Inquiry(e, this.appenv);
        content = inquiry.register();
        break;
      case "listx":
        content = Listx.listx_main(this.appenv)
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

