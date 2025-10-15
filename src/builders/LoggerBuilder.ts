import {DateTime} from "luxon";
import Chalk from "@/facades/Chalk";

export default class LoggerBuilder {
    protected timestamp: string;
    protected type: string;
    protected value: string;

    public constructor() {
        this.timestamp = DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss.SSS");
        this.type = "";
        this.value = "";
    }

    public setValue(value: string): LoggerBuilder {
        this.value = value;

        return this;
    }

    public debug(): LoggerBuilder {
        this.type = "DEBUG";

        return this;
    }

    public error(): LoggerBuilder {
        this.type = "ERROR";

        return this;
    }

    public info(): LoggerBuilder {
        this.type = "INFO";

        return this;
    }

    public warn(): LoggerBuilder {
        this.type = "WARN";

        return this;
    }

    public separator(): void {
        console.log("-".repeat(process.stdout.columns));
    }

    public show(): void {
        let typeValue: string = `[${this.type}]`;
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