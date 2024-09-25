function doGet() {
}
function doPost() {
}
function listx_test() {
}
function listx_test_2() {
}
function inquiry_test() {
}
function inquiry_test_2() {
}
function doGet() {
}
function doPost() {
}
function listx_test() {
}
function listx_test_2() {
}
function inquiry_test() {
}
function inquiry_test_2() {
}/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/src/Code.ts":
/*!****************************!*\
  !*** ./server/src/Code.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   doGet: () => (/* binding */ doGet),
/* harmony export */   doPost: () => (/* binding */ doPost),
/* harmony export */   inquiry_test: () => (/* binding */ inquiry_test),
/* harmony export */   inquiry_test_2: () => (/* binding */ inquiry_test_2),
/* harmony export */   listx_test: () => (/* binding */ listx_test),
/* harmony export */   listx_test_2: () => (/* binding */ listx_test_2)
/* harmony export */ });
/* harmony import */ var _webapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webapp */ "./server/src/webapp.ts");
// import * as Webappxy from './webapp';
// Code.js

function doGet(e) {
    const webapp = new _webapp__WEBPACK_IMPORTED_MODULE_0__.Webapp();
    return webapp.doGetx(e);
}
function doPost(e) {
    const webapp = new _webapp__WEBPACK_IMPORTED_MODULE_0__.Webapp();
    return webapp.doPostx(e);
}
function listx_test() {
    const webapp = new _webapp__WEBPACK_IMPORTED_MODULE_0__.Webapp();
    webapp.listx_test();
}
function listx_test_2() {
    const webapp = new _webapp__WEBPACK_IMPORTED_MODULE_0__.Webapp();
    webapp.listx_test_2();
}
function inquiry_test() {
    const webapp = new _webapp__WEBPACK_IMPORTED_MODULE_0__.Webapp();
    webapp.inquiry_test();
}
function inquiry_test_2() {
    const webapp = new _webapp__WEBPACK_IMPORTED_MODULE_0__.Webapp();
    webapp.inquiry_test_2();
}
__webpack_require__.g.doGet = __webpack_exports__.doGet;
__webpack_require__.g.doPost = __webpack_exports__.doPost;
__webpack_require__.g.listx_test = __webpack_exports__.listx_test;
__webpack_require__.g.listx_test_2 = __webpack_exports__.listx_test_2;
__webpack_require__.g.inquiry_test = __webpack_exports__.inquiry_test;
__webpack_require__.g.inquiry_test_2 = __webpack_exports__.inquiry_test_2;

/***/ }),

/***/ "./server/src/appenv.ts":
/*!******************************!*\
  !*** ./server/src/appenv.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Appenv: () => (/* binding */ Appenv)
/* harmony export */ });
class Appenv {
    static get_ss_id() {
        // return Appenv.ss_id;
        return '1TWZMVySbWnuOyWpOtNG4N08QNA_jNNlMsLPCkPV9fyI';
    }
    static get_sheet_name() {
        // return Appenv.sheet_name;
        return "Sheet1";
    }
    static get_index_ss_id() {
        // return Appenv.index_ss_id;
        return '1upauHI2N5cwrAEMzvG9UuC7dGLekuSkT-Y5uiKit9Bo';
    }
    static get_index_sheet_name() {
        // return Appenv.index_sheet_name;
        return "Sheet1";
    }
}
Appenv.index_ss_id = '1TWZMVySbWnuOyWpOtNG4N08QNA_jNNlMsLPCkPV9fyI';
Appenv.index_sheet_name = "Sheet1";
Appenv.ss_id = '1upauHI2N5cwrAEMzvG9UuC7dGLekuSkT-Y5uiKit9Bo';
Appenv.sheet_name = "Sheet1";


/***/ }),

/***/ "./server/src/infox.ts":
/*!*****************************!*\
  !*** ./server/src/infox.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Infox: () => (/* binding */ Infox)
/* harmony export */ });
/* harmony import */ var _spreadsheetx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spreadsheetx */ "./server/src/spreadsheetx.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./server/src/util.ts");
/* harmony import */ var _itemx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemx */ "./server/src/itemx.ts");
/* harmony import */ var _searchitem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchitem */ "./server/src/searchitem.ts");
/* harmony import */ var _itemvalue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemvalue */ "./server/src/itemvalue.ts");





class Infox {
    constructor(ss_id, sheet_name) {
        if (!_util__WEBPACK_IMPORTED_MODULE_1__.Util.is_valid_string(ss_id)) {
            throw new Error("Infox ss_id is invalide");
        }
        if (!_util__WEBPACK_IMPORTED_MODULE_1__.Util.is_valid_string(sheet_name)) {
            throw new Error("Infox sheet_name is invalide");
        }
        this.ss_id = ss_id;
        this.sheet_name = sheet_name;
        this.ssxx = null;
        this.ssheet = null;
        this.values = [[""]];
        if (!_util__WEBPACK_IMPORTED_MODULE_1__.Util.is_valid_string(this.ss_id) || !_util__WEBPACK_IMPORTED_MODULE_1__.Util.is_valid_string(this.sheet_name)) {
            throw new Error("Infox this.ss_id is invalide");
        }
        this.getValues();
    }
    setup() {
        if (this.ssxx === null) {
            this.ssxx = new _spreadsheetx__WEBPACK_IMPORTED_MODULE_0__.SpreadSheetx(this.ss_id);
        }
        if (this.ssxx !== null) {
            this.ssheet = this.ssxx.getSheet(this.sheet_name);
        }
    }
    appendRow(data_array) {
        // [this.name, this.email, this.inquiry, "受付", new Date(), new Date()]);
        this.setup();
        if (this.ssheet !== null) {
            this.ssheet.appendRow(data_array);
        }
    }
    getValues() {
        this.setup();
        if (this.ssheet !== null) {
            this.ssheet.fetchAndSetDataRange();
            this.values = this.ssheet.getValues();
        }
        return this.values;
    }
    getSSId(infoparam) {
        const values = this.getValues();
        const year = infoparam.year;
        const kind = infoparam.kind;
        const kind2 = infoparam.kind2;
        const item = this.make_item(year, kind, kind2);
        return this.get_id_from_values(values, item);
    }
    make_item(year_str = null, kind_str = null, kind2_str = null) {
        const INDEX_ID = 4;
        const INDEX_KIND = 0;
        const INDEX_YEAR = 1;
        // const INDEX_TITLE: number = 2
        const INDEX_KIND2 = 3;
        // const INDEX_URL: number = 6
        const value_item = new _itemvalue__WEBPACK_IMPORTED_MODULE_4__.Itemvalue({ index: INDEX_ID, value: "" });
        const search_items = [];
        if (year_str != null) {
            const s1_item = new _itemx__WEBPACK_IMPORTED_MODULE_2__.Itemx({ index: INDEX_YEAR, name: year_str });
            search_items.push(s1_item);
        }
        if (kind_str != null) {
            const s2_item = new _itemx__WEBPACK_IMPORTED_MODULE_2__.Itemx({ index: INDEX_KIND, name: kind_str });
            search_items.push(s2_item);
        }
        if (kind2_str != null) {
            const s3_item = new _itemx__WEBPACK_IMPORTED_MODULE_2__.Itemx({ index: INDEX_KIND2, name: kind2_str });
            search_items.push(s3_item);
        }
        const searchitem = new _searchitem__WEBPACK_IMPORTED_MODULE_3__.SearchItem({ searches: search_items, value: value_item });
        return searchitem;
    }
    get_id_from_values(d, item) {
        let result_start = d;
        let result_end = [];
        let ret_str = "";
        let xstr = "";
        const search_items = item.searches;
        const value_item = item.value;
        // Util.log(`Infox get_id_from_values result_start=${result_start}`);
        // Util.log(`Infox get_id_from_values =1-X d d.length=${d.length}`);
        d.map(it => {
            it.map(x => {
                _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`${x}, `);
            });
            _util__WEBPACK_IMPORTED_MODULE_1__.Util.log("\n");
        });
        const count = search_items.length;
        for (let i = 0; i < count; i++) {
            const item = search_items[i];
            xstr = item.name == null ? "null" : "not null";
            // Util.log(`Infox get_id_from_values =4-X i=${i} item.value=${xstr} result_start.length=${result_start.length}`);
            result_end = result_start.filter((v) => {
                return v[item.index] == item.name;
            });
            result_start = result_end;
            // Util.log("Infox get_id_from_values =S");
            // Util.log(result_start);
            // Util.log("Infox get_id_from_values =E");
        }
        // Util.log("Infox get_id_from_values =A1");
        if (result_start.length > 0) {
            // Util.log("Infox get_id_from_values =A2");
            ret_str = result_start[0][value_item.index];
            // Util.log(`Infox get_id_from_values 1 ret_str=${ret_str}`);
        }
        xstr = ret_str == null ? "(null)" : ret_str;
        // Util.log(`Infox get_id_from_values =A3 xstr=${xstr} value_item.index=${value_item.index}`);
        // Util.log(`Infox get_id_from_values ret=${ret} result_start.length=${result_start.length}`);
        return ret_str;
    }
}


/***/ }),

/***/ "./server/src/inquiry.ts":
/*!*******************************!*\
  !*** ./server/src/inquiry.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Inquiry: () => (/* binding */ Inquiry)
/* harmony export */ });
/* harmony import */ var _appenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appenv */ "./server/src/appenv.ts");
/* harmony import */ var _infox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infox */ "./server/src/infox.ts");


class Inquiry {
    static query_parse(e) {
        const assoc = { "name": "", "email": "", "inquiry": "", "test": -1 };
        assoc["name"] = e.parameter.name ? e.parameter.name : "";
        assoc["email"] = e.parameter.email ? e.parameter.email : "";
        assoc["inquiry"] = e.parameter.inquiry ? e.parameter.inquiry : "";
        return assoc;
    }
    static inquiry_main(assoc) {
        const inquiry = new Inquiry(assoc);
        return inquiry.register();
    }
    static inquiry_test() {
        let assoc = { "name": "john", "email": "john@abc.com", "inquiry": "といあわせ", "test": -10 };
        Inquiry.inquiry_main(assoc);
    }
    static inquiry_test_2() {
        let assoc = { "name": "Adam", "email": "adam@def.com", "inquiry": "問合せ", "test": -10 };
        Inquiry.inquiry_main(assoc);
    }
    constructor(assoc) {
        this.name = "";
        this.email = "";
        this.inquiry = "";
        if (typeof assoc["name"] === "string") {
            this.name = assoc["name"];
        }
        if (typeof assoc["email"] === "string") {
            this.email = assoc["email"];
        }
        if (typeof assoc["inquiry"] === "string") {
            this.inquiry = assoc["inquiry"];
        }
        //エラー制御
        this.email_exp = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]+$/;
        this.inquiry_exp = /^.{1,10}$/;
        this.ss_id = _appenv__WEBPACK_IMPORTED_MODULE_0__.Appenv.get_ss_id();
        this.sheet_name = _appenv__WEBPACK_IMPORTED_MODULE_0__.Appenv.get_sheet_name();
        this.infox = new _infox__WEBPACK_IMPORTED_MODULE_1__.Infox(this.ss_id, this.sheet_name);
    }
    validate() {
        if (this.name == "") {
            // return ContentService.createTextOutput("エラー1です。")
            return "validation error1!";
        }
        //スプレッドシートの準備
        if (!this.email_exp.test(this.email)) {
            // return ContentService.createTextOutput("エラー2です。")
            return "validation error!2";
        }
        if (!this.inquiry_exp.test(this.inquiry)) {
            // return ContentService.createTextOutput("エラー3です。")
            return "validation error3!";
        }
        return "";
    }
    register() {
        //問題があればエラーを返す（なければ処理を継続）
        const message = this.validate();
        if (message != "") {
            return ContentService.createTextOutput(JSON.stringify({ "message": message }));
        }
        if (this.infox !== null) {
            this.infox.appendRow([this.name, this.email, this.inquiry, "受付", new Date(), new Date()]);
        }
        //応答
        return ContentService.createTextOutput(JSON.stringify({ "message": "success!" }));
    }
}


/***/ }),

/***/ "./server/src/itemvalue.ts":
/*!*********************************!*\
  !*** ./server/src/itemvalue.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Itemvalue: () => (/* binding */ Itemvalue)
/* harmony export */ });
class Itemvalue {
    constructor(options) {
        this.index = options.index;
        this.value = options.value;
    }
}


/***/ }),

/***/ "./server/src/itemx.ts":
/*!*****************************!*\
  !*** ./server/src/itemx.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Itemx: () => (/* binding */ Itemx)
/* harmony export */ });
class Itemx {
    constructor(options) {
        this.index = options.index;
        this.name = options.name;
    }
}
// export default Item;


/***/ }),

/***/ "./server/src/listx.ts":
/*!*****************************!*\
  !*** ./server/src/listx.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Listx: () => (/* binding */ Listx)
/* harmony export */ });
/* harmony import */ var _infox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infox */ "./server/src/infox.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./server/src/util.ts");
/* harmony import */ var _appenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appenv */ "./server/src/appenv.ts");



class Listx {
    static valid_ss_id_and_sheet_name(ss_id, sheet_name) {
        if (!_util__WEBPACK_IMPORTED_MODULE_1__.Util.is_valid_string(ss_id)) {
            return "listx_sub ss_id is null";
        }
        if (!_util__WEBPACK_IMPORTED_MODULE_1__.Util.is_valid_string(sheet_name)) {
            return "sheet_name is null";
        }
        return "";
    }
    static make_resultx(error_message, listx = null) {
        return { error_message: error_message, listx: listx };
    }
    static get_from_array_with_index(array, num) {
        let text = "";
        const assoc_array_array = _util__WEBPACK_IMPORTED_MODULE_1__.Util.make_assoc_array_array(array);
        const project_id = assoc_array_array[num]["project_id"];
        const sheet_name = assoc_array_array[num]["sheet_1"];
        _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(JSON.stringify(assoc_array_array));
        _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`get_listx_from_array ss_id=${project_id} sheet_name=${sheet_name}`);
        let str = Listx.valid_ss_id_and_sheet_name(project_id, sheet_name);
        if (str === "") {
            const obj = Listx.listx_sub(project_id, sheet_name);
            if (obj.error_message === "") {
                if (obj.listx !== null) {
                    const array = obj.listx.getValues();
                    text = JSON.stringify(array);
                }
            }
            else {
                text = obj.error_message;
            }
        }
        return text;
    }
    static listx_sub(ss_id, sheet_name) {
        const infox = new _infox__WEBPACK_IMPORTED_MODULE_0__.Infox(ss_id, sheet_name);
        if (infox === null) {
            return Listx.make_resultx("infox is null");
        }
        const listx = new Listx(infox);
        if (listx === null) {
            return Listx.make_resultx("listx is null");
        }
        return Listx.make_resultx("", listx);
    }
    static listx_test() {
        let assoc = { "index": -1, "subcmd": "", "test": -1 };
        Listx.listx_main(assoc);
    }
    static listx_test_2() {
        let assoc = { "index": -1, "subcmd": "all", "test": -10 };
        Listx.listx_main(assoc);
    }
    static test_func(array, num) {
        let text = "";
        _util__WEBPACK_IMPORTED_MODULE_1__.Util.dump_array(array);
        if (num == -1) {
            for (let i = 0; i < array.length; i++) {
                text = Listx.get_from_array_with_index(array, i);
                _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`${i}-text=${text}`);
            }
        }
        else {
            text = Listx.get_from_array_with_index(array, num);
            _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`${num}-text=${text}`);
        }
        return text;
    }
    static query_parse(e) {
        const assoc = { "index": -1, "subcmd": "", "test": -1 };
        const index_str = e.parameter.index ? e.parameter.index : "";
        const subcmd = e.parameter.subcmd ? e.parameter.subcmd : "";
        if (index_str != "") {
            assoc["index"] = Number(index_str);
        }
        assoc["subcmd"] = subcmd;
        return assoc;
    }
    static listx_main(assoc) {
        // this.appenv = appenv
        if (typeof assoc["subcmd"] === "string") {
            const subcmd = assoc["subcmd"];
        }
        if (typeof assoc["index"] === "number" && assoc["index"] >= 0) {
            const index = assoc["index"];
        }
        const ss_id = _appenv__WEBPACK_IMPORTED_MODULE_2__.Appenv.get_index_ss_id();
        const sheet_name = _appenv__WEBPACK_IMPORTED_MODULE_2__.Appenv.get_index_sheet_name();
        _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`listx_main ss_id=${ss_id} sheet_name=${sheet_name}`);
        let text = "";
        let str = Listx.valid_ss_id_and_sheet_name(ss_id, sheet_name);
        if (str === "") {
            const obj = Listx.listx_sub(ss_id, sheet_name);
            if (obj.error_message === "") {
                const listx = obj.listx;
                if (listx !== null) {
                    const array = listx.getValues();
                    if (typeof assoc["test"] === "number" && assoc["test"] >= -2) {
                        text = Listx.test_func(array, assoc["test"]);
                    }
                    else if (assoc["subcmd"] === "all") {
                        const num_list = array.splice(1).map((values, i) => {
                            return values[0];
                        });
                        text = JSON.stringify(num_list);
                    }
                    else if (typeof assoc["index"] === "number" && assoc["index"] >= 0) {
                        text = Listx.get_from_array_with_index(array, assoc["index"]);
                    }
                    _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`${assoc["index"]}-text=${text}`);
                }
            }
            else {
                text = obj.error_message;
            }
        }
        else {
            text = str;
        }
        return ContentService.createTextOutput(text);
    }
    constructor(infox) {
        this.infox = infox;
        this.param = null;
        this.values = [[""]];
        this.error = { history: [""] };
    }
    getValues() {
        this.values = this.infox.getValues();
        return this.values;
    }
    getAsJson() {
        const json = _util__WEBPACK_IMPORTED_MODULE_1__.Util.getAsJSON(this.values);
        return json;
    }
    getAsHtml() {
        const text = this.values.join("");
        return ContentService.createTextOutput(text);
    }
    get() {
        const text = this.values.join("");
        return ContentService.createTextOutput(text);
    }
}


/***/ }),

/***/ "./server/src/searchitem.ts":
/*!**********************************!*\
  !*** ./server/src/searchitem.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchItem: () => (/* binding */ SearchItem)
/* harmony export */ });
class SearchItem {
    constructor(options) {
        this.searches = options.searches;
        this.value = options.value;
    }
}
;


/***/ }),

/***/ "./server/src/spreadsheetx.ts":
/*!************************************!*\
  !*** ./server/src/spreadsheetx.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpreadSheetx: () => (/* binding */ SpreadSheetx)
/* harmony export */ });
/* harmony import */ var _ssheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssheet */ "./server/src/ssheet.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./server/src/util.ts");


class SpreadSheetx {
    constructor(ss_id) {
        this.ss_id = ss_id;
        this.ss_url = "";
        this.ss = null;
        let xstr = "";
        let xstr2 = "";
        _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`##################### SpreadSheetx constructor A ss_id=${ss_id}`);
        if (typeof ss_id === "string" && ss_id.replace(/^\s+$/, '').length > 0) {
            this.ss = SpreadsheetApp.openById(ss_id); //IDから取得
            if (typeof (this.ss) === "string") {
                xstr = "null";
            }
            else {
                xstr = "valid";
            }
            if (typeof (this.ss_id) === "string") {
                xstr2 = this.ss_id;
            }
            else {
                xstr2 = "";
            }
            _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`##################### SpreadSheetx constructor T ss=${xstr} ss_id=${xstr2}`);
        }
        else {
            if (this.ss !== null) {
                xstr = "valid";
            }
            else {
                xstr = "null";
            }
            xstr2 = "null";
            _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`##################### SpreadSheetx constructor F ss=${xstr} ss_id=${xstr2}`);
        }
        this.s_sheet_assoc = {};
    }
    openByUrl(url) {
        let xstr = "";
        this.ss_url = url;
        if (this.ss_url != null) {
            this.ss = SpreadsheetApp.openByUrl(this.ss_url); //URLから取得
            xstr = this.ss == null ? "null" : "valid";
            _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`##################### SpreadSheetx constructor openByUrl T this.ss_url=${this.ss_url} ss=${xstr}`);
        }
        else {
            xstr = this.ss == null ? "null" : "valid";
            _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`##################### SpreadSheetx constructor openByUrl F this.ss_url=null ss=${xstr}`);
        }
    }
    getSheet(sheet_name) {
        _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`SpreadSheetx getSheet 1 sheet_name=${sheet_name}`);
        if (!_util__WEBPACK_IMPORTED_MODULE_1__.Util.is_valid_string(sheet_name)) {
            return null;
        }
        let s_sheet = this.s_sheet_assoc[sheet_name];
        let xstr = "";
        if (s_sheet === null || s_sheet === undefined) {
            _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`SpreadSheetx getSheet 2 sheet_name=${sheet_name}`);
            if (this.ss !== null) {
                _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`SpreadSheetx getSheet 0 1 this.ss=${this.ss}|sheet_name=${sheet_name}`);
                const sheet = this.ss.getSheetByName(sheet_name);
                _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`SpreadSheetx getSheet 0 2 sheet=${sheet}`);
                if (sheet === null) {
                    throw new Error("sheet is null");
                }
                s_sheet = new _ssheet__WEBPACK_IMPORTED_MODULE_0__.SSheet(sheet, sheet_name);
                xstr = this.ss_id == null ? "" : this.ss_id;
                _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`SpreadSheetx getSheet 0 4 this.ss_id=${xstr}`);
                xstr = this.ss_url == null ? "" : this.ss_url;
                _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`SpreadSheetx getSheet 0 5 this.ss_url=${xstr}`);
                this.s_sheet_assoc[sheet_name] = s_sheet;
            }
            else {
                xstr = "null";
                _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`##################### SpreadSheetx error!! this.ss=${xstr} s_sheet=undefined`);
            }
        }
        else {
            xstr = s_sheet == null ? xstr = "not null" : "valid";
            _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`SpreadSheetx getSheet 2 sheet_name=${sheet_name} s_sheet=${xstr}`);
            xstr = this.ss_id == null ? "" : this.ss_id;
            _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`SpreadSheetx getSheet 2 this.ss_id=${xstr}`);
            xstr = this.ss_url == null ? "" : this.ss_url;
            _util__WEBPACK_IMPORTED_MODULE_1__.Util.log(`SpreadSheetx getSheet 2 this.ss_url=${xstr}`);
        }
        return s_sheet;
    }
}
// export default SpreadSheetx;


/***/ }),

/***/ "./server/src/ssheet.ts":
/*!******************************!*\
  !*** ./server/src/ssheet.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSheet: () => (/* binding */ SSheet)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./server/src/util.ts");

class SSheet {
    constructor(sheet, sheet_name) {
        let xstr = "";
        this.sheet_name = sheet_name;
        this.sheet = sheet;
        this.dataRange = null;
        if (this.sheet !== null) {
            this.dataRange = this.sheet.getDataRange();
            xstr = this.dataRange == null ? "" : "valid";
            _util__WEBPACK_IMPORTED_MODULE_0__.Util.log(`SSheet 1-1 T constructor this.sheet_name=${this.sheet_name} this.dataRange=${xstr}`);
        }
        else {
            xstr = this.dataRange == null ? "" : "valid";
            _util__WEBPACK_IMPORTED_MODULE_0__.Util.log(`SSheet 1-2 F constructor this.sheet_name=${this.sheet_name} this.dataRange=${xstr}`);
        }
    }
    //   this.dataRange = { "x":15, "y": 1, "height": 100, "width":9 };
    getRange(x, y, height, width) {
        let xstr = "";
        if (this.sheet != null) {
            this.dataRange = this.sheet.getRange(x, y, height, width);
            xstr = this.dataRange == null ? "" : "valid";
            _util__WEBPACK_IMPORTED_MODULE_0__.Util.log(`SSheet 2-1 getRange this.sheet_name=${this.sheet_name} this.dataRange=${xstr}`);
        }
        else {
            xstr = this.dataRange == null ? "" : "valid";
            _util__WEBPACK_IMPORTED_MODULE_0__.Util.log(`SSheet 2-2 getRange this.sheet_name=${this.sheet_name} this.dataRange=${xstr}`);
        }
    }
    fetchAndSetDataRange() {
        let xstr = "";
        if (this.sheet != null) {
            this.dataRange = this.sheet.getDataRange();
            xstr = this.dataRange == null ? "" : "valid";
            _util__WEBPACK_IMPORTED_MODULE_0__.Util.log(`SSheet 3-1 getDataRange this.sheet_name=${this.sheet_name} this.dataRange=${xstr}`);
        }
        else {
            xstr = this.dataRange == null ? "" : "valid";
            _util__WEBPACK_IMPORTED_MODULE_0__.Util.log(`SSheet 3-2 getDataRange this.sheet_name=${this.sheet_name} this.dataRange=${xstr}`);
        }
    }
    getValues() {
        let xvalues = [[""]];
        if (this.dataRange != null) {
            const values = this.dataRange.getValues();
            if (values != null) {
                xvalues = values;
            }
        }
        else {
            xvalues = [["dataRange=null"]];
        }
        return xvalues;
    }
    appendRow(data_array) {
        if (this.sheet !== null) {
            this.sheet.appendRow(data_array);
        }
    }
}


/***/ }),

/***/ "./server/src/util.ts":
/*!****************************!*\
  !*** ./server/src/util.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Util: () => (/* binding */ Util)
/* harmony export */ });
class Util {
    static log_init() {
    }
    static log(message) {
        Logger.log(message);
        return message;
    }
    static print_line(lines) {
        let xstr = "";
        if (lines != null) {
            lines.map(l => {
                l.map(x => {
                    if (typeof x === "string") {
                        xstr = x;
                    }
                    else {
                        xstr = "(null)";
                    }
                    Util.log(xstr);
                });
            });
            Util.log("\n");
        }
    }
    static detect_blank_line(line) {
        return line.indexOf('');
    }
    static remove_blank_line(lines) {
        let result = [];
        lines.forEach((line, index) => {
            if (Util.detect_blank_line(line) === -1) {
                result.push(line);
            }
        });
        return result;
    }
    static remove_upper_blank_line(lines) {
        let result = [];
        let skip_flag = true;
        lines.forEach((line, index) => {
            if (skip_flag) {
                if (Util.detect_blank_line(line) === -1) {
                    skip_flag = false;
                    result.push(line);
                }
            }
            else {
                result.push(line);
            }
        });
        return result;
    }
    static get_line_state(line) {
        if (Util.detect_blank_line(line) === -1) {
            return Util.NOT_BLANK_LINE;
        }
        else {
            return Util.BLANK_LINE;
        }
    }
    static remove_under_the_blank_row(lines) {
        let result = [];
        let range_state = Util.UPPER_BLANK_LINE_RANGE;
        let line_state = Util.BLANK_LINE;
        lines.forEach((line, index) => {
            line_state = Util.get_line_state(line);
            if (range_state === Util.UPPER_BLANK_LINE_RANGE) {
                result.push(line);
                if (line_state === Util.NOT_BLANK_LINE) {
                    range_state = Util.NOT_BLANK_LINE_RANGE;
                }
            }
            else if (range_state === Util.NOT_BLANK_LINE_RANGE) {
                if (line_state === Util.NOT_BLANK_LINE) {
                    result.push(line);
                }
                else {
                    range_state = Util.BOTTOM_BLANK_LINE_RANGE;
                }
            }
        });
        return result;
    }
    static remove_left_blank_cols(lines) {
        const list = Util.detect_ws_level(lines);
        let pos = Math.min(...list);
        return Util.reform_sub(lines, pos);
    }
    static reform_sub(lines, pos) {
        let result = [];
        lines.forEach((line, index) => {
            let result2 = [];
            line.forEach((word, i) => {
                if (i >= pos) {
                    result2.push(word);
                }
            });
            result.push(result2);
        });
        Util.log(`reform_sub result=${result}`);
        return result;
    }
    static getAsJSON(values) {
        const init_value = { "": "" };
        const xarray = { "": init_value };
        //先頭行にラベルがあるものとして、それ以降の行に各カラムにラベルをキーとして、カラムの値を値とする連想配列を作成
        let first_i = 0;
        let second_i_str = "";
        let index = 0;
        let index_str = "";
        for (let i = 1; i < values.length; i++) {
            index = i - 1;
            index_str = index.toString();
            xarray[index_str] = {};
            for (let j = 0; j < values[0].length; j++) {
                first_i = i - 1;
                second_i_str = values[0][j];
                xarray[first_i][second_i_str] = values[i][j];
            }
        }
        //オブジェクトの変数をJSON形式に変換
        const json = JSON.stringify(xarray);
        return json;
    }
    static son2string(sn) {
        if (typeof sn === "string") {
            return sn;
        }
        else {
            return "";
        }
    }
    static is_valid_string(str) {
        if (str === null || typeof str === "undefined") {
            return false;
        }
        if (str.replace(/^\s*$/, '').length == 0) {
            return false;
        }
        return true;
    }
    static make_assoc_array_array(xarray) {
        let result = [{}];
        if (xarray.length > 0) {
            const keys = xarray[0];
            Util.log(`Util.make_assoc_array_array keys=${keys}`);
            xarray.slice(1).forEach((values, index) => {
                let obj = {};
                keys.forEach((key, i) => {
                    obj[key] = values[i];
                });
                result.push(obj);
            });
        }
        return result;
    }
    static dump_array(array) {
        array.forEach((item, index) => {
            Util.log(`listx_main ${index} 0=${item[0]} 1=${item[1]}`);
        });
    }
    static detect_ws_level(lines) {
        let no_ws_level_list = [];
        lines.forEach((line, index) => {
            line.forEach((word, i) => {
                if (word !== '') {
                    no_ws_level_list.push(i);
                    return;
                }
            });
        });
        // console.log(`ws_level_list=${ws_level_list}`);
        return no_ws_level_list;
    }
}
Util.UPPER_BLANK_LINE_RANGE = 1;
Util.NOT_BLANK_LINE_RANGE = 2;
Util.BOTTOM_BLANK_LINE_RANGE = 3;
Util.BLANK_LINE = 10;
Util.NOT_BLANK_LINE = 11;


/***/ }),

/***/ "./server/src/webapp.ts":
/*!******************************!*\
  !*** ./server/src/webapp.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Webapp: () => (/* binding */ Webapp)
/* harmony export */ });
/* harmony import */ var _inquiry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inquiry */ "./server/src/inquiry.ts");
/* harmony import */ var _listx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listx */ "./server/src/listx.ts");


class Webapp {
    listx_test() {
        _listx__WEBPACK_IMPORTED_MODULE_1__.Listx.listx_test();
    }
    listx_test_2() {
        _listx__WEBPACK_IMPORTED_MODULE_1__.Listx.listx_test_2();
    }
    inquiry_test() {
        _inquiry__WEBPACK_IMPORTED_MODULE_0__.Inquiry.inquiry_test();
    }
    inquiry_test_2() {
        _inquiry__WEBPACK_IMPORTED_MODULE_0__.Inquiry.inquiry_test_2();
    }
    do0(e) {
        //値の受け取り
        let content;
        const cmd = e.parameter.cmd ? e.parameter.cmd : "";
        switch (cmd) {
            case "inquiry":
                const inquiry_assoc = _inquiry__WEBPACK_IMPORTED_MODULE_0__.Inquiry.query_parse(e);
                content = _inquiry__WEBPACK_IMPORTED_MODULE_0__.Inquiry.inquiry_main(inquiry_assoc);
                break;
            case "listx":
                const listx_assoc = _listx__WEBPACK_IMPORTED_MODULE_1__.Listx.query_parse(e);
                content = _listx__WEBPACK_IMPORTED_MODULE_1__.Listx.listx_main(listx_assoc);
                break;
            default:
                content = ContentService.createTextOutput(`cmd=default cmd=${cmd}`);
        }
        return content;
    }
    doGetx(e) {
        return this.do0(e);
    }
    doPostx(e) {
        return this.do0(e);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./server/src/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Code */ "./server/src/Code.ts");

__webpack_require__.g.doGet = _Code__WEBPACK_IMPORTED_MODULE_0__.doGet;
__webpack_require__.g.doPost = _Code__WEBPACK_IMPORTED_MODULE_0__.doPost;
__webpack_require__.g.listx_test = _Code__WEBPACK_IMPORTED_MODULE_0__.listx_test;
__webpack_require__.g.listx_test_2 = _Code__WEBPACK_IMPORTED_MODULE_0__.listx_test_2;
__webpack_require__.g.inquiry_test = _Code__WEBPACK_IMPORTED_MODULE_0__.inquiry_test;
__webpack_require__.g.inquiry_test_2 = _Code__WEBPACK_IMPORTED_MODULE_0__.inquiry_test_2;

/******/ })()
;