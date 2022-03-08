"use strict";
exports.__esModule = true;
// 改行文字サンプル
var XLSX = require("xlsx");
"use strict";
var utils = XLSX.utils;
// workbookの読み込み
var workbook = XLSX.readFile('sample_new_line.xlsx');
//シートの読み込み
var worksheet = workbook.Sheets['トライ結果'];
// let text = worksheet['AH8'].w.replace(/CHAR¥(10¥)/g,"");
// 改行文字の削除（できない）
var text = worksheet['AH8'].w.replace(/\r?\n/g, "");
// 文字列の変換（できる）
text = worksheet['AH8'].w.replace(/した/g, "された");
console.log(text);
// console.log(worksheet['AH8'].v);
