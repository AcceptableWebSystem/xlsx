"use strict";
exports.__esModule = true;
// 文字列連結サンプル
var XLSX = require("./node_modules/xlsx");
"use strict";
var utils = XLSX.utils;
// workbookの読み込み
var workbook = XLSX.readFile('test.xlsx');
//シートの読み込み
var worksheet = workbook.Sheets['Sheet1'];
//セルの範囲
var range = worksheet['!ref'];
var rangeVal = utils.decode_range(range); // { s: { c: 0, r: 0 }, e: { c: 3, r: 8 } }
// 文字列連結の変数
var text = "";
for (var r = rangeVal.s.r; r <= rangeVal.e.r; r++) {
    for (var c = rangeVal.s.c; c <= rangeVal.e.c; c++) {
        var adr = utils.encode_cell({ c: c, r: r });
        var cell = worksheet[adr];
        // 空白セルはundefined
        if (cell) {
            text = text + cell.w;
        }
    }
}
console.log(text);
