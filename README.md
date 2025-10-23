<div align="center">

<img src="https://github.com/crenata/bejibun/blob/master/public/images/bejibun.png?raw=true" width="150" alt="Bejibun" />

![GitHub top language](https://img.shields.io/github/languages/top/crenata/bejibun-logger)
![GitHub all releases](https://img.shields.io/github/downloads/crenata/bejibun-logger/total)
![GitHub issues](https://img.shields.io/github/issues/crenata/bejibun-logger)
![GitHub](https://img.shields.io/github/license/crenata/bejibun-logger)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/crenata/bejibun-logger?display_name=tag&include_prereleases)

</div>

# Logger
A beauty logger for your Apps.

## Usage

### Installation
Install the package.

```bash
# Using Bun
bun add @bejibun/logger

# Using Bejibun
bun ace install @bejibun/logger
```

### How to Use
How to use the package.

```ts
import Logger from "@bejibun/logger";

// Default
Logger.debug("This is DEBUG message."); // 2025-10-16 16:00:00.000 [DEBUG]: This is DEBUG message.
Logger.error("This is ERROR message."); // 2025-10-16 16:00:00.000 [ERROR]: This is ERROR message.
Logger.info("This is INFO message."); // 2025-10-16 16:00:00.000 [INFO]: This is INFO message.
Logger.warn("This is WARN message."); // 2025-10-16 16:00:00.000 [WARN]: This is WARN message.

// With Context
Logger.setContext("Exception").error("Error with Context."); // 2025-10-16 16:00:00.000 [Exception]: Error with Context.

// Others
Logger.empty(); // such as <br/>
Logger.separator(); // --------------------- until end of terminal width
```

## Contributors
- [Havea Crenata](mailto:havea.crenata@gmail.com)

## ☕ Support / Donate

If you find this project helpful and want to support it, you can donate via PayPal :

[![Donate with PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?logo=paypal)](https://paypal.me/hafiizhghulam)

Or if you are prefer using crypto :

| EVM                                                                                                     | Solana                                                                                                  |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/crenata/bejibun/blob/master/public/images/EVM.png?raw=true" width="150" /> | <img src="https://github.com/crenata/bejibun/blob/master/public/images/SOL.png?raw=true" width="150" /> |
| 0xdABe8750061410D35cE52EB2a418c8cB004788B3                                                              | GAnoyvy9p3QFyxikWDh9hA3fmSk2uiPLNWyQ579cckMn                                                            |