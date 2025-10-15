export default class ChalkBuilder {
    protected value: string;
    protected isNewLine: boolean;
    protected clk: any;
    constructor();
    setValue(value: string): ChalkBuilder;
    inline(): ChalkBuilder;
    bold(): ChalkBuilder;
    debug(): ChalkBuilder;
    error(): ChalkBuilder;
    info(): ChalkBuilder;
    warn(): ChalkBuilder;
    show(): string;
    private get _value();
}
