declare module 'language-guesser' {
    export class Language {
        languagesAlpha3: { [key: string]: { alpha2: string; alpha3: string; name: string } };
        languagesAlpha2: { [key: string]: { alpha2: string; alpha3: string; name: string } };
        extraSentences: Array<[string, string]>;

        constructor();

        static getTrigrams(srcValue: string): string[];
        static asTuples(value: string): Array<[string, number]>;
        static getDistance(trigrams: Array<[string, number]>, model: { [key: string]: number }): number;
        static getOccurrence(value: string, expression: RegExp): number;
        static isLatin(value: string): boolean;
        static getTopScript(value: string): [string, number];
        static filterLanguages(languages: { [key: string]: { [key: string]: number } }, allowList: string[], denyList: string[]): { [key: string]: { [key: string]: number } };
        static getDistances(trigrams: Array<[string, number]>, srcLanguages: { [key: string]: { [key: string]: number } }, options: { allowList?: string[]; denyList?: string[] }): Array<[string, number]>;
        static detectAll(srcValue: string, settings?: { minLength?: number; allowList?: string[] }): Array<[string, number]> | undefined;

        buildData(): void;
        transformAllowList(allowList: string[]): string[];
        guess(utterance: string, allowList?: string[], limit?: number): Array<{ alpha3: string; alpha2: string; language: string; score: number }>;
        guessBest(utterance: string, allowList?: string[]): { alpha3: string; alpha2: string; language: string; score: number } | undefined;
        addTrigrams(locale: string, sentence: string): void;
        addExtraSentence(locale: string, sentence: string): void;
        processExtraSentences(): void;
        sortDetectedLanguages(detectedLanguages: Array<{ alpha3: string; alpha2: string; language: string; score: number }>, allowList: string[]): { alpha3: string; alpha2: string; language: string; score: number };

        static lansplit(s: string): string[] | undefined;
        static addModel(script: string, name: string, value: string): void;
        addModel(script: string, name: string, value: string): void;

        static buildModel(): void;
    }
}
