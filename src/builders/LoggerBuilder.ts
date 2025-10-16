import {defineValue, isNotEmpty} from "@bejibun/utils";
import {DateTime} from "luxon";
import Chalk from "@/facades/Chalk";

export default class LoggerBuilder {
    protected timestamp: string;
    protected type: string;
    protected value: string;
    protected context: string;

    public constructor() {
        this.timestamp = DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss.SSS");
        this.type = "";
        this.context = "";
        this.value = "";
    }

    public setContext(context: string): LoggerBuilder {
        this.context = context;

        return this;
    }

    public setValue(value: string): LoggerBuilder {
        this.value = value;

        return this;
    }

    public debug(value?: string): void {
        this.type = "DEBUG";

        if (isNotEmpty(value)) this.setValue(value as string);

        this.show();
    }

    public error(value?: string): void {
        this.type = "ERROR";

        if (isNotEmpty(value)) this.setValue(value as string);

        this.show();
    }

    public info(value?: string): void {
        this.type = "INFO";

        if (isNotEmpty(value)) this.setValue(value as string);

        this.show();
    }

    public warn(value?: string): void {
        this.type = "WARN";

        if (isNotEmpty(value)) this.setValue(value as string);

        this.show();
    }

    public separator(): void {
        console.log("-".repeat(process.stdout.columns));
    }

    public show(): void {
        let typeValue: string = `[${defineValue(this.context, this.type)}]`;
        let chalk: string;

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