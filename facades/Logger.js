import LoggerBuilder from "../builders/LoggerBuilder";
export default class Logger {
    static setContext(context) {
        return new LoggerBuilder().setContext(context);
    }
    static debug(value) {
        return new LoggerBuilder().setValue(value).debug();
    }
    static error(value) {
        return new LoggerBuilder().setValue(value).error();
    }
    static info(value) {
        return new LoggerBuilder().setValue(value).info();
    }
    static warn(value) {
        return new LoggerBuilder().setValue(value).warn();
    }
    static separator() {
        return new LoggerBuilder().separator();
    }
}
