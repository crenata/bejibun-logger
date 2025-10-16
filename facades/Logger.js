import LoggerBuilder from "../builders/LoggerBuilder";
export default class Logger {
    static setContext(context) {
        return new LoggerBuilder().setContext(context);
    }
    static debug(value) {
        new LoggerBuilder().setValue(value).debug();
    }
    static error(value) {
        new LoggerBuilder().setValue(value).error();
    }
    static info(value) {
        new LoggerBuilder().setValue(value).info();
    }
    static warn(value) {
        new LoggerBuilder().setValue(value).warn();
    }
    static separator() {
        new LoggerBuilder().separator();
    }
}
