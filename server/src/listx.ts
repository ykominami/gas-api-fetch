import { Infox } from "./infox";
import { SpreadSheetx } from "./spreadsheetx";
import { SSheet } from "./ssheet";
import { Util } from "./util";
import { Appenv } from "./appenv";


export class Listx {
    infox: Infox
    param: InfoParam | null
    ss_id: string
    sheet_name: string
    ss: SpreadSheetx | null
    s_sheet: SSheet | null
    values: string[][]
    error: { history: string[] }

    static listx_main(appenv: Appenv):GASHtmlTextOutputType {
        // this.appenv = appenv
        const ss_id = appenv.get_index_ss_id()
        const sheet_name = appenv.get_index_sheet_name()
        const infox = new Infox(ss_id, sheet_name)
        const listx = new Listx(infox);
        const array = listx.getValues()
        Logger.log(`listx_main array=${ JSON.stringify(array) }`)
        const text = listx.getAsJson();
        return ContentService.createTextOutput("cmd=listx|" + text)
    }
    constructor(infox: Infox) {
        this.infox = infox
        this.param = null
        this.ss_id = ""
        this.ss = null
        this.s_sheet = null
        this.sheet_name = ""
        this.values = [["BookInfo"]]
        this.error = { history: ["Booklist-A-1 init"] }
    }

    getValues(): string[][] {
        this.ss = new SpreadSheetx(this.ss_id)
        this.s_sheet = this.ss.getSheet(this.sheet_name)
        this.s_sheet.fetchAndSetDataRange();
        this.values = this.s_sheet.getValues(); //  as string[][]
        if (this.values.length <= 1) {
            // Util.log(`Booklist B-1`)
            this.error.history.push(`Booklist-A-4 get_values this.values.length=${this.values.length}`)
            return [this.error.history]
        }
        else {
            // Util.log(`Booklist B-2 get_values this.values.length=${this.values.length}`)
            return this.values
            // return [ this.error.history ]
        }
    }
    getAsJson(): string {
        // const json = Util.getAsJSON(this.values.map((item) => item.join('')).join(""));
        const json = Util.getAsJSON(this.values);
        // const json = Util.getAsJSON(Object.keys(this.itemArray).map((key) => [key, this.values[key].name, this.values[key].url]));
        return json;
    }
    getAsHtml(): GASHtmlTextOutputType {
      // return "getAsHtml 72";
      const text = this.values.join("");
      return ContentService.createTextOutput("listx-default AsHtml");
    }
    get(): GASHtmlTextOutputType  {
      const text = this.values.join("");
      return ContentService.createTextOutput("listx-default get");
    }
}