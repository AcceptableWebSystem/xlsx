// 文字列連結サンプル
import * as XLSX from './node_modules/xlsx';

"use strict";
let utils = XLSX.utils;
// workbookの読み込み
let workbook = XLSX.readFile('test.xlsx');
//シートの読み込み
let worksheet = workbook.Sheets['Sheet1'];

//セルの範囲
let range = worksheet['!ref']!;
let rangeVal = utils.decode_range(range);   // { s: { c: 0, r: 0 }, e: { c: 3, r: 8 } }
// 文字列連結の変数
let text = "";
for (let r=rangeVal.s.r ; r <= rangeVal.e.r ; r++) {
    for (let c=rangeVal.s.c ; c <= rangeVal.e.c ; c++) {
        let adr = utils.encode_cell({c:c, r:r});
        let cell = worksheet[adr];
        // 空白セルはundefined
        if (cell) {
            text = text + cell.w;
        }
    }
}
console.log(text);