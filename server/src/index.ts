import { doGet, doPost, listx_test, listx_test_2 } from './Code';

declare const global: {
  [x: string]: unknown;
};

global.doGet = doGet;
global.doPost = doPost;
global.listx_test = listx_test;
global.listx_test_2 = listx_test_2;
