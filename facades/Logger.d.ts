import LoggerBuilder from "../builders/LoggerBuilder";
export default class Logger {
    static setContext(context: string): LoggerBuilder;
    static debug(value: string): void;
    static error(value: string): void;
    static info(value: string): void;
    static warn(value: string): void;
    static separator(): void;
}
