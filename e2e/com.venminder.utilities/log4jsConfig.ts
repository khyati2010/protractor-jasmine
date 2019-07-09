import { rmdir } from "fs";
var fs = require('fs');
export class log4jsConfig {
    static Log() {
        var log4js = require('log4js');
        log4js.configure('./e2e/log4j.json');
        let log = log4js.getLogger("info");
        return log;
    }
}