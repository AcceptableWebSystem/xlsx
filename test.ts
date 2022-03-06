import * as XLSX from './node_modules/xlsx';

"use strict";
const utils = XLSX.utils;

let workbook = XLSX.readFile('test.xlsx', {
    cellDates: true
});
//シートの読み込み
let worksheet = workbook.Sheets['Sheet1'];

//セルの範囲
let range = worksheet['!ref'];
let rangeVal = utils.decode_range(range);
for (let r=rangeVal.s.r ; r <= rangeVal.e.r ; r++) {
    for (let c=rangeVal.s.c ; c <= rangeVal.e.c ; c++) {
        let adr = utils.encode_cell({c:c, r:r});
        let cell = worksheet[adr];
        console.log(`${adr} type:${cell.t} value:${cell.v} text:${cell.w}`);
    }
}