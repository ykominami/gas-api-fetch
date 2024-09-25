// import * as Webappxy from './webapp';
// Code.js
import { Webapp } from "./webapp";

export function doGet(e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent): GASHtmlTextOutputType {
    const webapp = new Webapp();
    return webapp.doGetx(e);
}
export function doPost(e: GoogleAppsScript.Events.DoPost): GASHtmlTextOutputType {
    const webapp = new Webapp();
    return webapp.doPostx(e);
}

export function listx_test(): void {
    const webapp = new Webapp();
    webapp.listx_test();
}
export function listx_test_2(): void {
    const webapp = new Webapp();
    webapp.listx_test_2();
}

export function inquiry_test(): void {
    const webapp = new Webapp();
    webapp.inquiry_test();
}
export function inquiry_test_2(): void {
    const webapp = new Webapp();
    webapp.inquiry_test_2();
}