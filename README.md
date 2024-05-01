# Language Guesser

Language Guesser is a robust and efficient library for detecting the language of a given text based on statistical analysis. It's perfect for applications that need to handle multilingual user input.

## Installation

Install the package using npm:

```bash
npm install @horizon-rs/language-guesser
```

Or with yarn:

```bash
yarn add @horizon-rs/language-guesser
```

## Usage

Here's a quick example of how to use Language Guesser:

```javascript
import { Language } from '@horizon-rs/language-guesser';

const language = new Language();
const text = 'This is a sample text in English.';
const result = language.guess(text);

console.log('Detected language:', result);
```

## API

### `Language` Class

The `Language` class provides methods for language detection and related operations.

#### `constructor()`

Creates a new instance of the `Language` class.

#### `guess(utterance: string, allowList?: string[], limit?: number): { alpha3: string; alpha2: string; language: string; score: number }[]`

Detects the language of the provided `utterance`. You can optionally specify an allowList of accepted languages and a `limit` for the number of results.

#### `guessBest(utterance: string, allowList?: string[]): { alpha3: string; alpha2: string; language: string; score: number } | undefined`


Returns the best guess for the language of the `utterance`. You can optionally specify an `allowList` of accepted languages.

#### `addExtraSentence(locale: string, sentence: string): void`

Adds an extra sentence for language analysis. This can enhance the accuracy of language detection.

## Contributing

We welcome contributions! Feel free to submit issues and pull requests. Let's make Language Guesser the best language detection library together!

## Acknowledgements

Special thanks to AXA's NLP-JS, which served as a significant source of inspiration for this library.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
