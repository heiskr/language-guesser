type LanguageData = [string, string, string][];

type Trigram = string;
type TrigramFrequency = number;
type TrigramTuple = [Trigram, TrigramFrequency];
type TrigramDictionary = Record<Trigram, TrigramFrequency>;

type Script = string;
type Model = Record<Trigram, number>;

export interface LanguageOptions {
    minLength?: number;
    allowList?: string[];
}

export interface DetectionResult {
    alpha3: string | null;
    alpha2: string | null;
    language: string | null;
    score: number;
}

export interface GuessResult {
    alpha3: string | null;
    alpha2: string | null;
    language: string | null;
    score: number;
}

export interface GuessOptions {
    minLength?: number;
    allowList?: string[];
    limit?: number;
}

declare module '@horizon-rs/language-guesser' {
    export declare class Language {
        private languagesAlpha3: Record<string, { alpha2: string; alpha3: string; name: string }>;
        private languagesAlpha2: Record<string, { alpha2: string; alpha3: string; name: string }>;
        private extraSentences: [string, string][];

        constructor();

        private static getTrigrams(srcValue: string): Trigram[];
        private static asTuples(value: string): TrigramTuple[];
        private static getDistance(trigrams: TrigramTuple[], model: Model): number;
        private static getOccurrence(value: string, expression: RegExp): number;
        private static isLatin(value: string): boolean;
        private static getTopScript(value: string): [Script, number];
        private static filterLanguages(languages: Record<string, Model>, allowList: string[], denyList: string[]): Record<string, Model>;
        private static getDistances(trigrams: TrigramTuple[], srcLanguages: Record<string, Model>, options: { allowList?: string[]; denyList?: string[] }): [string, number][];
        private static detectAll(srcValue: string, settings?: LanguageOptions): [string, number][];
        private buildData(): void;

        private transformAllowList(allowList: string[]): string[];
        guess(utterance: string, allowList?: string[], limit?: number): GuessResult[];
        guessBest(utterance: string, allowList: string[]): GuessResult;
        addTrigrams(locale: string, sentence: string): void;
        addExtraSentence(locale: string, sentence: string): void;
        processExtraSentences(): void;
        private static lansplit(s: string): string[];
        private static addModel(script: string, name: string, value: any): void;
        private addModel(script: string, name: string, value: any): void;
        
        private static buildModel(): void;
    }
}