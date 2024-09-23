import { doGet, doPost, listx_test } from './Code';

declare const global: {
  [x: string]: unknown;
};

global.doGet = doGet;
global.doPost = doPost;
global.listx_test = listx_test;
