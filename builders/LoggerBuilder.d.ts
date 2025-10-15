export default class LoggerBuilder {
    protected timestamp: string;
    protected type: string;
    protected value: string;
    constructor();
    setValue(value: string): LoggerBuilder;
    debug(): LoggerBuilder;
    error(): LoggerBuilder;
    info(): LoggerBuilder;
    warn(): LoggerBuilder;
    separator(): void;
    show(): void;
}
