import { DateTime } from "luxon";
import Chalk from "../facades/Chalk";
export default class LoggerBuilder {
    timestamp;
    type;
    value;
    constructor() {
        this.timestamp = DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss.SSS");
        this.type = "";
        this.value = "";
    }
    setValue(value) {
        this.value = value;
        return this;
    }
    debug() {
        this.type = "DEBUG";
        return this;
    }
    error() {
        this.type = "ERROR";
        return this;
    }
    info() {
        this.type = "INFO";
        return this;
    }
    warn() {
        this.type = "WARN";
        return this;
    }
    separator() {
        console.log("-".repeat(process.stdout.columns));
    }
    show() {
        let typeValue = `[${this.type}]`;
        let chalk;
        switch (this.type) {
            case "DEBUG":
                chalk = Chalk.setValue(typeValue).inline().debug().show();
                break;
            case "ERROR":
                chalk = Chalk.setValue(typeValue).inline().error().show();
                break;
            case "WARN":
                chalk = Chalk.setValue(typeValue).inline().warn().show();
                break;
            default:
                chalk = Chalk.setValue(typeValue).inline().info().show();
                break;
        }
        console.log(this.timestamp, `${chalk}:`, this.value);
    }
}
