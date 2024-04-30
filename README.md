# Language Guesser

Language Guesser is a library for detecting the language of a given text based on statistical analysis.

## Installation

You can install the package via npm:

```bash
npm install language-guesser
```

or via yarn:

```bash
yarn add language-guesser
```

## Usage

```javascript
import { Language } from ('language-guesser');

const language = new Language();
const text = 'This is a sample text in English.';
const result = language.guess(text);

console.log('Detected language:', result);
```

## API

### `Language` Class

The `Language` class provides methods for language detection and related operations.

#### `constructor()`

Initializes a new instance of the `Language` class.

#### `guess(utterance: string, allowList?: string[], limit?: number): { alpha3: string; alpha2: string; language: string; score: number }[]`

Detects the language of the given `utterance`. Optionally, you can provide an `allowList` of accepted languages and a `limit` for the number of results.

#### `guessBest(utterance: string, allowList?: string[]): { alpha3: string; alpha2: string; language: string; score: number } | undefined`

Returns the best guess for the language of the given `utterance`. Optionally, you can provide an `allowList` of accepted languages.

#### `addExtraSentence(locale: string, sentence: string): void`

Adds an extra sentence for language analysis. This can improve the accuracy of language detection.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
