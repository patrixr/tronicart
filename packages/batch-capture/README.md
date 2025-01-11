# @tronicart/batch-capture

`@tronicart/batch-capture` is a CLI tool that takes screenshots of a running P5 script using Puppeteer.

## Installation

You can install `@tronicart/batch-capture` globally using npm:

```bash
npm install -g @tronicart/batch-capture
```

## Usage

To use `@tronicart/batch-capture`, run the following command:

```bash
batch-capture generate <url> <count>
```

This command takes two arguments:

-   `<url>`: The URL of the P5 script to capture screenshots of.
-   `<count>`: The number of screenshots to capture.

Optionally, you can also provide the following environment variable to customize the output folder:

-   `OUT_FOLDER`: The path to the output folder. Defaults to `generated` in the current working directory.

### Example

To capture 10 screenshots of a P5 script running at `http://localhost:3000`, run the following command:

```bash
batch-capture generate http://localhost:3000 10
```

The screenshots will be saved in the `generated` folder in the current working directory.

## License

This tool is licensed under the MIT License.
