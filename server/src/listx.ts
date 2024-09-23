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

    static valid_ss_id_and_sheet_name(ss_id:string, sheet_name:string):string {
        if( ! Util.is_valid_string(ss_id)) {
            return "listx_sub ss_id is null";
        }
        if ( ! Util.is_valid_string(sheet_name) ){
            return "sheet_name is null"
        }
        return ""
    }

    static listx_sub(ss_id: string, sheet_name: string): { error_message:string, listx:Listx | null } {
        const infox = new Infox(ss_id, sheet_name)

        if( infox === null){
            return {error_message:"infox is null", listx:null}
        }
        const listx = new Listx(infox);
        if (listx === null){
            return {error_message:"listx is null", listx:null}
        }
        return {error_message:"", listx: listx}
    }

    static listx_ss(ss_id: string, sheet_name: string): string {
        let text: string = ""
        let str = Listx.valid_ss_id_and_sheet_name(ss_id, sheet_name)
        if( str === ""){
            const obj = Listx.listx_sub(ss_id, sheet_name)
            if( obj.error_message === ""){
                const listx = obj.listx
                if( listx !== null){
                    const array2 = listx.getValues()
                    text = JSON.stringify(array2);
                    Util.log(text)
                }
            }
        }
        return text
    }
    static listx_func(array: string[][], num:number): string {
        const assoc_array_array = Util.make_assoc_array_array(array)
        const ss_id = assoc_array_arrayy[num]["ss_id"]
        const sheet_name = assoc_array_arrayy[num]["sheet"]
        Util.log(`listx_func ss_id=${ss_id} sheet_name=${sheet_name}`)

        return Listx.listx_ss(ss_id, sheet_name)
    }
    static listx_main():GASHtmlTextOutputType {
        // this.appenv = appenv
        const ss_id = Appenv.get_index_ss_id()
        const sheet_name = Appenv.get_index_sheet_name()
        Util.log(`listx_main ss_id=${ss_id} sheet_name=${sheet_name}`)

        let text: string = ""
        let str = Listx.valid_ss_id_and_sheet_name(ss_id, sheet_name)
        if( str === ""){
            const obj = Listx.listx_sub(ss_id, sheet_name)
            if( obj.error_message === ""){
                const listx = obj.listx
                if( listx !== null){
                    const array = listx.getValues()
                    // Listx.listx_func(array, 1)
                    array.forEach((item, index)=>{
                        Util.log(`listx_main ${index} 0=${item[0]} 1=${item[1]}`)
                    })
                    text = "listx_main"
                }
            }
            else{
                text = obj.error_message
            }
        }
        else{
            text = str
        }
        Util.log(`listx_main text=${text}`)

        return ContentService.createTextOutput("cmd=listx|" + text)
    }
    constructor(infox: Infox) {
        this.infox = infox
        this.param = null
        this.ss_id = infox.ss_id
        this.ss = null
        this.s_sheet = null
        this.sheet_name = infox.sheet_name
        this.values = [[""]]
        this.error = { history: [""] }
    }

    getValues(): string[][] {
        if( ! Util.is_valid_string(this.ss_id) ){
            Util.log(`Listx getValues this.ss_id=${this.ss_id}|`)
            throw new Error(`Listx getValues ss_id=${this.ss_id}`)
        }
        if( ! Util.is_valid_string(this.sheet_name) ){
            Util.log(`Listx getValues this.sheet_name=${this.sheet_name}|`)
            throw new Error(`Listx getValues this.sheet_name=${this.sheet_name}`);
        }
        this.ss = new SpreadSheetx(this.ss_id)
        this.s_sheet = this.ss.getSheet(this.sheet_name)
        if (this.s_sheet === null || typeof this.s_sheet === "undefined") {
            this.error.history.push("Booklist-A-2 get_values this.s_sheet is null or undefined")
            return [this.error.history]
        }
        this.s_sheet.fetchAndSetDataRange();
        this.values = this.s_sheet.getValues(); //  as string[][]
        if (this.values.length <= 1) {
            this.error.history.push(`Booklist-A-4 get_values this.values.length=${this.values.length}`)
            return [this.error.history]
        }
        else {
            return this.values
        }
    }
    getAsJson(): string {
        const json = Util.getAsJSON(this.values);
        return json;
    }
    getAsHtml(): GASHtmlTextOutputType {
      const text = this.values.join("");
      return ContentService.createTextOutput(text);
    }
    get(): GASHtmlTextOutputType  {
      const text = this.values.join("");
      return ContentService.createTextOutput(text);
    }
}