type GASHtmlTextOutputType = GoogleAppsScript.HTML.HtmlOutput | GoogleAppsScript.Content.TextOutput;
/* */
type DataRangex = { x: number; y: number; height: number; width: number };

type AssocValue = null | string;
interface AssocArray {
  [index: string]: AssocValue;
}
type StringOrNull = string | null;

type ThreeItemsOrNull = [number, number, number] | [null, null, null];

type ThreeItemsAssocArr = [ThreeItemsOrNull];
type ThreeItemsAssocArray = Record<number, ThreeItemsAssocArr>;

interface InfoParam {
  sheet_name: StringOrNull;
  kind: StringOrNull;
  kind2: StringOrNull;
  year: StringOrNull;
}
/* */
interface StartPointOfYearArray {
  [index: string]: number;
}

