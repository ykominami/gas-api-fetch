type GASHtmlTextOutputType = GoogleAppsScript.HTML.HtmlOutput | GoogleAppsScript.Content.TextOutput;
/* */
type DataRangex = { x: number; y: number; height: number; width: number };

type AssocValue = null | string;
interface AssocArray {
  [index: string]: AssocValue;
}
type StringOrNull = string | null;
type StringOrNumberOrNull = string | number | null;
type QueryKeyType = "index"|"subcmd"|"test"
type QueryAssocType = Record<QueryKeyType, StringOrNumberOrNull>;

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
type ListxOrNull = Listx | null;
type ResultX = { error_message:string, listx:ListxOrNull }
