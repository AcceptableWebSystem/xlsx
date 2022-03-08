// 改行文字サンプル
import * as XLSX from 'xlsx';

"use strict";
let utils = XLSX.utils;
// workbookの読み込み
let workbook = XLSX.readFile('sample_new_line.xlsx');
//シートの読み込み
let worksheet = workbook.Sheets['トライ結果'];
// let text = worksheet['AH8'].w.replace(/CHAR\(10\)/g,"");
// let text = worksheet['AH8'].w.replace(/&#010;/g,"");
// 改行文字の削除（できない）
// let text = worksheet['AH8'].w.replace(/\r/g,"");
// let text = worksheet['AH8'].w.replace(/\n/g,"");
let text = worksheet['AH8'].w.trim();
// let text = worksheet['AH8'].w.replace(/\r?\n/g,"");
// 文字列の変換（できる）
// text = worksheet['AH8'].w.replace(/した/g,"された");
console.log(text);
// console.log(worksheet['AH8'].v);