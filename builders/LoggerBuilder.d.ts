export default class LoggerBuilder {
    protected timestamp: string;
    protected type: string;
    protected value: string;
    protected context: string;
    constructor();
    setContext(context: string): LoggerBuilder;
    setValue(value: string): LoggerBuilder;
    debug(value?: string): void;
    error(value?: string): void;
    info(value?: string): void;
    warn(value?: string): void;
    separator(): void;
    show(): void;
}
