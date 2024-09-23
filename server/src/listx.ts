import { Infox } from "./infox";
import { SpreadSheetx } from "./spreadsheetx";
import { SSheet } from "./ssheet";
import { Util } from "./util";
import { Appenv } from "./appenv";


export class Listx {
    infox: Infox
    param: InfoParam | null
    values: string[][]
    error: { history: string[] }

    static valid_ss_id_and_sheet_name(ss_id:string, sheet_name:string):string {
        if( ! Util.is_valid_string(ss_id)) {
            return "listx_sub ss_id is null"
        }
        if ( ! Util.is_valid_string(sheet_name) ){
            return "sheet_name is null"
        }
        return ""
    }

    static make_resultx(error_message:string, listx: ListxOrNull = null): ResultX {
        return {error_message:error_message, listx:listx }
    }

    static get_from_array_with_index(array: string[][], num:number): string {
        let text: string = ""
        const assoc_array_array = Util.make_assoc_array_array(array)
        const project_id = assoc_array_array[num]["project_id"]
        const sheet_name = assoc_array_array[num]["sheet_1"]
        Util.log( JSON.stringify(assoc_array_array))
        Util.log(`get_listx_from_array ss_id=${project_id} sheet_name=${sheet_name}`)
        let str = Listx.valid_ss_id_and_sheet_name(project_id, sheet_name)
        if( str === ""){
            const obj = Listx.listx_sub(project_id, sheet_name)
            if( obj.error_message === ""){
                if( obj.listx !== null){
                    const array = obj.listx.getValues()
                    text = JSON.stringify(array)
                }
            }
            else{
                text = obj.error_message
            }
        }
        return text
    }

    static listx_sub(ss_id: string, sheet_name: string): ResultX {
        const infox = new Infox(ss_id, sheet_name)

        if( infox === null){
            return Listx.make_resultx("infox is null")
        }
        const listx = new Listx(infox);
        if (listx === null){
            return Listx.make_resultx("listx is null")
        }
        return Listx.make_resultx("", listx)
    }
    static listx_test():void {
        let assoc: QueryAssocType = {"index":-1, "subcmd":"", "test": -1}

        Listx.listx_main(assoc)
    }
    static listx_test_2():void {
        let assoc: QueryAssocType = {"index":-1, "subcmd":"all", "test": -10}

        Listx.listx_main(assoc)
    }
    static test_func(array: string[][], num:number):string {
        let text:string = ""
        Util.dump_array(array)
        if (num == -1){
            for( let i = 0; i < array.length; i++){
                text = Listx.get_from_array_with_index(array, i)
                Util.log(`${i}-text=${text}`)
            }
        }
        else{
            text = Listx.get_from_array_with_index(array, num)
            Util.log(`${num}-text=${text}`)
        }
        return text
    }
    static query_parse(e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent): QueryAssocType {
        const assoc:QueryAssocType = {"index":-1, "subcmd":"", "test": -1}
        const index_str:string = e.parameter.index ? e.parameter.index : "";
        const subcmd:string = e.parameter.subcmd ? e.parameter.subcmd : "";
        if(index_str != ""){
            assoc["index"] = Number(index_str)
        }
        assoc["subcmd"] = subcmd

        return assoc
    }
    static listx_main(assoc:QueryAssocType):GASHtmlTextOutputType {
        // this.appenv = appenv
        const subcmd = assoc["subcmd"]
        const index = assoc["index"]
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
                    if( typeof assoc["test"] === "number" && assoc["test"] >= -2 ){
                        text = Listx.test_func(array, assoc["test"])
                    }
                    else if( assoc["subcmd"] === "all"){
                        const num_list = array.splice(1).map((values:string[][], i:number) => {
                            return values[0]
                        } )
                        text = JSON.stringify(num_list)
                    }
                    else if(typeof assoc["index"] === "number" && assoc["index"] >= 0){
                        text = Listx.get_from_array_with_index(array, assoc["index"])
                    }
                    Util.log(`${index}-text=${text}`)
                }
            }
            else{
                text = obj.error_message
            }
        }
        else{
            text = str
        }

        return ContentService.createTextOutput("cmd=listx|" + text)
    }
    constructor(infox: Infox) {
        this.infox = infox
        this.param = null
        // this.ss_id = infox.ss_id
        // this.ss = null
        // this.s_sheet = null
        // this.sheet_name = infox.sheet_name
        this.values = [[""]]
        this.error = { history: [""] }
    }

    getValues(): string[][] {
        this.values = this.infox.getValues()
        return this.values
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