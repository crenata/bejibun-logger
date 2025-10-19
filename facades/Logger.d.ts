import LoggerBuilder from "../builders/LoggerBuilder";
export default class Logger {
    static setContext(context: string): LoggerBuilder;
    static debug(value: string): LoggerBuilder;
    static error(value: string): LoggerBuilder;
    static info(value: string): LoggerBuilder;
    static warn(value: string): LoggerBuilder;
    static empty(): void;
    static separator(): void;
}
