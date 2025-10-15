import LoggerBuilder from "../builders/LoggerBuilder";
export default class Logger {
    static debug(value) {
        new LoggerBuilder().setValue(value).debug().show();
    }
    static error(value) {
        new LoggerBuilder().setValue(value).error().show();
    }
    static info(value) {
        new LoggerBuilder().setValue(value).info().show();
    }
    static warn(value) {
        new LoggerBuilder().setValue(value).warn().show();
    }
    static separator() {
        new LoggerBuilder().separator();
    }
}
