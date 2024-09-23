export class Appenv {
  // index_ss_id: string
  // index_sheet_name: string
  // ss_id: string
  // sheet_name: string

  /*
  constructor(){
    this.ss_id = '1TWZMVySbWnuOyWpOtNG4N08QNA_jNNlMsLPCkPV9fyI';
    this.sheet_name = "Sheet1";
    this.index_ss_id = '1upauHI2N5cwrAEMzvG9UuC7dGLekuSkT-Y5uiKit9Bo';
    this.index_sheet_name = "Sheet1";
  }
  */

  get_ss_id():string {
    return  '1TWZMVySbWnuOyWpOtNG4N08QNA_jNNlMsLPCkPV9fyI';
    // return this.ss_id;
  }
  get_sheet_name():string {
    return "Sheet1";
    // return this.sheet_name;
  }
  get_index_ss_id():string {
    return  '1upauHI2N5cwrAEMzvG9UuC7dGLekuSkT-Y5uiKit9Bo';
    // return this.index_ss_id;
  }
  get_index_sheet_name():string {
    return "Sheet1";
    // return this.index_sheet_name;
  }
}
