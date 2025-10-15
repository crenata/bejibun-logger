import chalk from "chalk";
import os from "os";
export default class ChalkBuilder {
    value;
    isNewLine;
    clk;
    constructor() {
        this.value = "";
        this.isNewLine = true;
    }
    setValue(value) {
        this.value = value;
        return this;
    }
    inline() {
        this.isNewLine = false;
        return this;
    }
    bold() {
        if (this.clk)
            this.clk = this.clk.bold;
        else
            this.clk = chalk.bold;
        return this;
    }
    debug() {
        if (this.clk)
            this.clk = this.clk.gray;
        else
            this.clk = chalk.gray;
        return this;
    }
    error() {
        if (this.clk)
            this.clk = this.clk.red;
        else
            this.clk = chalk.red;
        return this;
    }
    info() {
        if (this.clk)
            this.clk = this.clk.blueBright;
        else
            this.clk = chalk.blueBright;
        return this;
    }
    warn() {
        if (this.clk)
            this.clk = this.clk.yellow;
        else
            this.clk = chalk.yellow;
        return this;
    }
    show() {
        return this.clk(this._value);
    }
    get _value() {
        if (this.isNewLine)
            return `${this.value}${os.EOL}`;
        return this.value;
    }
}
