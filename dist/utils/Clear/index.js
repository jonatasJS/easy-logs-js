"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Clear(txt) {
    if (txt == null)
        return console.clear();
    console.clear();
    return console.log(txt);
}
exports.default = Clear;
