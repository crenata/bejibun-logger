import LoggerBuilder from "@/builders/LoggerBuilder";

export default class Logger {
    public static setContext(context: string): LoggerBuilder {
        return new LoggerBuilder().setContext(context);
    }

    public static debug(value: string): void {
        new LoggerBuilder().setValue(value).debug();
    }

    public static error(value: string): void {
        new LoggerBuilder().setValue(value).error();
    }

    public static info(value: string): void {
        new LoggerBuilder().setValue(value).info();
    }

    public static warn(value: string): void {
        new LoggerBuilder().setValue(value).warn();
    }

    public static separator(): void {
        new LoggerBuilder().separator();
    }
}