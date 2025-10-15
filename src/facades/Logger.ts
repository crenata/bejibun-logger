import LoggerBuilder from "@/builders/LoggerBuilder";

export default class Logger {
    public static debug(value: string): void {
        new LoggerBuilder().setValue(value).debug().show();
    }

    public static error(value: string): void {
        new LoggerBuilder().setValue(value).error().show();
    }

    public static info(value: string): void {
        new LoggerBuilder().setValue(value).info().show();
    }

    public static warn(value: string): void {
        new LoggerBuilder().setValue(value).warn().show();
    }

    public static separator(): void {
        new LoggerBuilder().separator();
    }
}