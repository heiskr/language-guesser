// Import the Language class
const Language = require('../src/language.cjs');
const assert = require('assert') 

// Test the getTrigrams() method
test('getTrigrams() should return an array of trigrams', () => {
  const trigrams = Language.getTrigrams('Hello World');
  expect(trigrams).toEqual([' he', 'hel', 'ell', 'llo', 'lo ', 'o w', ' wo', 'wor', 'orl', 'rld', 'ld ']);
});

// Test the asTuples() method
test('asTuples() should convert the given value into an array of tuples', () => {
  const tuples = Language.asTuples('Hello World');
  expect(tuples).toEqual([[' he', 1], ['hel', 1], ['ell', 1], ['llo', 1], ['lo ', 1], ['o w', 1], [' wo', 1], ['wor', 1], ['orl', 1], ['rld', 1], ['ld ', 1]]);
});

// Test the getDistance() method
test('getDistance() should calculate the distance between trigrams and the model', () => {
  const trigrams = [[' he', 1], ['hel', 1], ['ell', 1]];
  const model = { ' he': 1, 'hel': 2, 'ell': 3, 'llo': 4 };
  const distance = Language.getDistance(trigrams, model);
  expect(distance).toBe(6);
});

// Test the getOccurrence() method
test('getOccurrence() should calculate the occurrence of a given expression in a string', () => {
  const value = 'Hello World';
  const expression = /l/g;
  const occurrence = Language.getOccurrence(value, expression);
  expect(occurrence).toBe(0.2727272727272727);
});

// Test the isLatin() method
test('isLatin() should check if a given string contains mostly Latin characters', () => {
  const value = 'Hello World';
  const isLatin = Language.isLatin(value);
  expect(isLatin).toBe(true);
});

// Test the getTopScript() method
test('getTopScript() should return the top script and its occurrence count for the given value', () => {
  const value = 'Hello World';
  const topScript = Language.getTopScript(value);
  expect(topScript).toEqual(['Latin', 1]);
});

// Test the filterLanguages() method
test('filterLanguages() should filter the given languages based on the allowList and denyList', () => {
  const languages = {
    en: { name: 'English' },
    fr: { name: 'French' },
    es: { name: 'Spanish' },
    de: { name: 'German' },
  };
  const allowList = ['en', 'fr'];
  const denyList = ['es'];
  const filteredLanguages = Language.filterLanguages(languages, allowList, denyList);
  expect(filteredLanguages).toEqual({
    en: { name: 'English' },
    fr: { name: 'French' },
  });
});

// Test the getDistances() method
test('getDistances() should calculate the distances between trigrams and source languages', () => {
  const trigrams = [[' he', 1], ['hel', 1], ['ell', 1]];
  const srcLanguages = {
    en: { ' he': 1, 'hel': 2, 'ell': 3 },
    fr: { ' he': 4, 'hel': 5, 'ell': 6 },
    es: { ' he': 7, 'hel': 8, 'ell': 9 },
  };
  const options = { allowList: ['en', 'fr'] };
  const distances = Language.getDistances(trigrams, srcLanguages, options);
  expect(distances).toEqual([
    ['en', 6],
    ['fr', 15],
  ]);
});

// Test the detectAll() method
test('detectAll() should detect the language of the given source value', () => {
  const srcValue = 'Hello World';
  const settings = { minLength: 5, allowList: ['eng'] };
  const detectedLanguages = Language.detectAll(srcValue, settings);
  expect(detectedLanguages).toEqual([['eng', 1]]);
});

// Test the buildData() method
test('buildData() should populate the languagesAlpha3 and languagesAlpha2 objects', () => {
  const language = new Language();
  expect(language.languagesAlpha3).toEqual({
    aar: { alpha2: 'aa', alpha3: 'aar', name: 'Afar' },
    abk: { alpha2: 'ab', alpha3: 'abk', name: 'Abkhazian' },
    afr: { alpha2: 'af', alpha3: 'afr', name: 'Afrikaans' },
    aka: { alpha2: 'ak', alpha3: 'aka', name: 'Akan' },
    amh: { alpha2: 'am', alpha3: 'amh', name: 'Amharic' },
    arb: { alpha2: 'ar', alpha3: 'arb', name: 'Arabic' },
    arg: { alpha2: 'an', alpha3: 'arg', name: 'Aragonese' },
    asm: { alpha2: 'as', alpha3: 'asm', name: 'Assamese' },
    ava: { alpha2: 'av', alpha3: 'ava', name: 'Avaric' },
    ave: { alpha2: 'ae', alpha3: 'ave', name: 'Avestan' },
    aym: { alpha2: 'ay', alpha3: 'aym', name: 'Aymara' },
    aze: { alpha2: 'az', alpha3: 'aze', name: 'Azerbaijani' },
    bak: { alpha2: 'ba', alpha3: 'bak', name: 'Bashkir' },
    bam: { alpha2: 'bm', alpha3: 'bam', name: 'Bambara' },
    bel: { alpha2: 'be', alpha3: 'bel', name: 'Belarusian' },
    ben: { alpha2: 'bn', alpha3: 'ben', name: 'Bengali' },
    bih: { alpha2: 'bh', alpha3: 'bih', name: 'Bihari languages' },
    bis: { alpha2: 'bi', alpha3: 'bis', name: 'Bislama' },
    bod: { alpha2: 'bo', alpha3: 'bod', name: 'Tibetan' },
    bos: { alpha2: 'bs', alpha3: 'bos', name: 'Bosnian' },
    bre: { alpha2: 'br', alpha3: 'bre', name: 'Breton' },
    bul: { alpha2: 'bg', alpha3: 'bul', name: 'Bulgarian' },
    cat: { alpha2: 'ca', alpha3: 'cat', name: 'Catalan' },
    ces: { alpha2: 'cs', alpha3: 'ces', name: 'Czech' },
    cha: { alpha2: 'ch', alpha3: 'cha', name: 'Chamorro' },
    che: { alpha2: 'ce', alpha3: 'che', name: 'Chechen' },
    chu: { alpha2: 'cu', alpha3: 'chu', name: 'Church Slavic' },
    chv: { alpha2: 'cv', alpha3: 'chv', name: 'Chuvash' },
    cor: { alpha2: 'kw', alpha3: 'cor', name: 'Cornish' },
    cos: { alpha2: 'co', alpha3: 'cos', name: 'Corsican' },
    cre: { alpha2: 'cr', alpha3: 'cre', name: 'Cree' },
    cym: { alpha2: 'cy', alpha3: 'cym', name: 'Welsh' },
    dan: { alpha2: 'da', alpha3: 'dan', name: 'Danish' },
    deu: { alpha2: 'de', alpha3: 'deu', name: 'German' },
    div: { alpha2: 'dv', alpha3: 'div', name: 'Divehi' },
    dzo: { alpha2: 'dz', alpha3: 'dzo', name: 'Dzongkha' },
    ell: { alpha2: 'el', alpha3: 'ell', name: 'Greek' },
    eng: { alpha2: 'en', alpha3: 'eng', name: 'English' },
    epo: { alpha2: 'eo', alpha3: 'epo', name: 'Esperanto' },
    est: { alpha2: 'et', alpha3: 'est', name: 'Estonian' },
    eus: { alpha2: 'eu', alpha3: 'eus', name: 'Basque' },
    ewe: { alpha2: 'ee', alpha3: 'ewe', name: 'Ewe' },
    fao: { alpha2: 'fo', alpha3: 'fao', name: 'Faroese' },
    fas: { alpha2: 'fa', alpha3: 'fas', name: 'Persian' },
    fij: { alpha2: 'fj', alpha3: 'fij', name: 'Fijian' },
    fin: { alpha2: 'fi', alpha3: 'fin', name: 'Finnish' },
    fra: { alpha2: 'fr', alpha3: 'fra', name: 'French' },
    fry: { alpha2: 'fy', alpha3: 'fry', name: 'Western Frisian' },
    ful: { alpha2: 'ff', alpha3: 'ful', name: 'Fulah' },
    gla: { alpha2: 'gd', alpha3: 'gla', name: 'Gaelic' },
    gle: { alpha2: 'ga', alpha3: 'gle', name: 'Irish' },
    glv: { alpha2: 'gv', alpha3: 'glv', name: 'Manx' },
    grn: { alpha2: 'gn', alpha3: 'grn', name: 'Guarani' },
    guj: { alpha2: 'gu', alpha3: 'guj', name: 'Gujarati' },
    hat: { alpha2: 'ht', alpha3: 'hat', name: 'Haitian' },
    hau: { alpha2: 'ha', alpha3: 'hau', name: 'Hausa' },
    heb: { alpha2: 'he', alpha3: 'heb', name: 'Hebrew' },
    her: { alpha2: 'hz', alpha3: 'her', name: 'Herero' },
    hin: { alpha2: 'hi', alpha3: 'hin', name: 'Hindi' },
    hmo: { alpha2: 'ho', alpha3: 'hmo', name: 'Hiri Motu' },
    hrv: { alpha2: 'hr', alpha3: 'hrv', name: 'Croatian' },
    hun: { alpha2: 'hu', alpha3: 'hun', name: 'Hungarian' },
    hye: { alpha2: 'hy', alpha3: 'hye', name: 'Armenian' },
    ibo: { alpha2: 'ig', alpha3: 'ibo', name: 'Igbo' },
    ido: { alpha2: 'io', alpha3: 'ido', name: 'Ido' },
    iii: { alpha2: 'ii', alpha3: 'iii', name: 'Sichuan Yi' },
    iku: { alpha2: 'iu', alpha3: 'iku', name: 'Inuktitut' },
    ile: { alpha2: 'ie', alpha3: 'ile', name: 'Interlingue' },
    ina: { alpha2: 'ia', alpha3: 'ina', name: 'Interlingua' },
    ind: { alpha2: 'id', alpha3: 'ind', name: 'Indonesian' },
    ipk: { alpha2: 'ik', alpha3: 'ipk', name: 'Inupiaq' },
    isl: { alpha2: 'is', alpha3: 'isl', name: 'Icelandic' },
    ita: { alpha2: 'it', alpha3: 'ita', name: 'Italian' },
    jav: { alpha2: 'jv', alpha3: 'jav', name: 'Javanese' },
    jpn: { alpha2: 'ja', alpha3: 'jpn', name: 'Japanese' },
    kal: { alpha2: 'kl', alpha3: 'kal', name: 'Kalaallisut' },
    kan: { alpha2: 'kn', alpha3: 'kan', name: 'Kannada' },
    kas: { alpha2: 'ks', alpha3: 'kas', name: 'Kashmiri' },
    kat: { alpha2: 'ka', alpha3: 'kat', name: 'Georgian' },
    kau: { alpha2: 'kr', alpha3: 'kau', name: 'Kanuri' },
    kaz: { alpha2: 'kk', alpha3: 'kaz', name: 'Kazakh' },
    khm: { alpha2: 'km', alpha3: 'khm', name: 'Central Khmer' },
    kik: { alpha2: 'ki', alpha3: 'kik', name: 'Kikuyu' },
    kin: { alpha2: 'rw', alpha3: 'kin', name: 'Kinyarwanda' },
    kir: { alpha2: 'ky', alpha3: 'kir', name: 'Kirghiz' },
    kom: { alpha2: 'kv', alpha3: 'kom', name: 'Komi' },
    kon: { alpha2: 'kg', alpha3: 'kon', name: 'Kongo' },
    kor: { alpha2: 'ko', alpha3: 'kor', name: 'Korean' },
    kua: { alpha2: 'kj', alpha3: 'kua', name: 'Kuanyama' },
    kur: { alpha2: 'ku', alpha3: 'kur', name: 'Kurdish' },
    lao: { alpha2: 'lo', alpha3: 'lao', name: 'Lao' },
    lat: { alpha2: 'la', alpha3: 'lat', name: 'Latin' },
    lav: { alpha2: 'lv', alpha3: 'lav', name: 'Latvian' },
    lim: { alpha2: 'li', alpha3: 'lim', name: 'Limburgan' },
    lin: { alpha2: 'ln', alpha3: 'lin', name: 'Lingala' },
    lit: { alpha2: 'lt', alpha3: 'lit', name: 'Lithuanian' },
    ltz: { alpha2: 'lb', alpha3: 'ltz', name: 'Luxembourgish' },
    lub: { alpha2: 'lu', alpha3: 'lub', name: 'Luba-Katanga' },
    lug: { alpha2: 'lg', alpha3: 'lug', name: 'Ganda' },
    mah: { alpha2: 'mh', alpha3: 'mah', name: 'Marshallese' },
    mal: { alpha2: 'ml', alpha3: 'mal', name: 'Malayalam' },
    mar: { alpha2: 'mr', alpha3: 'mar', name: 'Marathi' },
    mkd: { alpha2: 'mk', alpha3: 'mkd', name: 'Macedonian' },
    mlg: { alpha2: 'mg', alpha3: 'mlg', name: 'Malagasy' },
    mlt: { alpha2: 'mt', alpha3: 'mlt', name: 'Maltese' },
    mon: { alpha2: 'mn', alpha3: 'mon', name: 'Mongolian' },
    mri: { alpha2: 'mi', alpha3: 'mri', name: 'Maori' },
    msa: { alpha2: 'ms', alpha3: 'msa', name: 'Malay' },
    mya: { alpha2: 'my', alpha3: 'mya', name: 'Burmese' },
    nau: { alpha2: 'na', alpha3: 'nau', name: 'Nauru' },
    nav: { alpha2: 'nv', alpha3: 'nav', name: 'Navajo' },
    nbl: { alpha2: 'nr', alpha3: 'nbl', name: 'Ndebele, South' },
    nde: { alpha2: 'nd', alpha3: 'nde', name: 'Ndebele, North' },
    ndo: { alpha2: 'ng', alpha3: 'ndo', name: 'Ndonga' },
    nep: { alpha2: 'ne', alpha3: 'nep', name: 'Nepali' },
    nld: { alpha2: 'nl', alpha3: 'nld', name: 'Dutch' },
    nno: { alpha2: 'nn', alpha3: 'nno', name: 'Norwegian Nynorsk' },
    nob: { alpha2: 'nb', alpha3: 'nob', name: 'Bokmål, Norwegian' },
    nor: { alpha2: 'no', alpha3: 'nor', name: 'Norwegian' },
    nya: { alpha2: 'ny', alpha3: 'nya', name: 'Chichewa' },
    oci: { alpha2: 'oc', alpha3: 'oci', name: 'Occitan' },
    oji: { alpha2: 'oj', alpha3: 'oji', name: 'Ojibwa' },
    ori: { alpha2: 'or', alpha3: 'ori', name: 'Oriya' },
    orm: { alpha2: 'om', alpha3: 'orm', name: 'Oromo' },
    oss: { alpha2: 'os', alpha3: 'oss', name: 'Ossetian' },
    pan: { alpha2: 'pa', alpha3: 'pan', name: 'Panjabi' },
    pli: { alpha2: 'pi', alpha3: 'pli', name: 'Pali' },
    pol: { alpha2: 'pl', alpha3: 'pol', name: 'Polish' },
    por: { alpha2: 'pt', alpha3: 'por', name: 'Portuguese' },
    pus: { alpha2: 'ps', alpha3: 'pus', name: 'Pushto' },
    que: { alpha2: 'qu', alpha3: 'que', name: 'Quechua' },
    roh: { alpha2: 'rm', alpha3: 'roh', name: 'Romansh' },
    ron: { alpha2: 'ro', alpha3: 'ron', name: 'Romanian' },
    run: { alpha2: 'rn', alpha3: 'run', name: 'Rundi' },
    rus: { alpha2: 'ru', alpha3: 'rus', name: 'Russian' },
    sag: { alpha2: 'sg', alpha3: 'sag', name: 'Sango' },
    san: { alpha2: 'sa', alpha3: 'san', name: 'Sanskrit' },
    sin: { alpha2: 'si', alpha3: 'sin', name: 'Sinhala' },
    slk: { alpha2: 'sk', alpha3: 'slk', name: 'Slovak' },
    slv: { alpha2: 'sl', alpha3: 'slv', name: 'Slovenian' },
    sme: { alpha2: 'se', alpha3: 'sme', name: 'Northern Sami' },
    smo: { alpha2: 'sm', alpha3: 'smo', name: 'Samoan' },
    sna: { alpha2: 'sn', alpha3: 'sna', name: 'Shona' },
    snd: { alpha2: 'sd', alpha3: 'snd', name: 'Sindhi' },
    som: { alpha2: 'so', alpha3: 'som', name: 'Somali' },
    sot: { alpha2: 'st', alpha3: 'sot', name: 'Sotho, Southern' },
    spa: { alpha2: 'es', alpha3: 'spa', name: 'Spanish' },
    sqi: { alpha2: 'sq', alpha3: 'sqi', name: 'Albanian' },
    srd: { alpha2: 'sc', alpha3: 'srd', name: 'Sardinian' },
    srp: { alpha2: 'sr', alpha3: 'srp', name: 'Serbian' },
    ssw: { alpha2: 'ss', alpha3: 'ssw', name: 'Swati' },
    sun: { alpha2: 'su', alpha3: 'sun', name: 'Sundanese' },
    swa: { alpha2: 'sw', alpha3: 'swa', name: 'Swahili' },
    swe: { alpha2: 'sv', alpha3: 'swe', name: 'Swedish' },
    tah: { alpha2: 'ty', alpha3: 'tah', name: 'Tahitian' },
    tam: { alpha2: 'ta', alpha3: 'tam', name: 'Tamil' },
    tat: { alpha2: 'tt', alpha3: 'tat', name: 'Tatar' },
    tel: { alpha2: 'te', alpha3: 'tel', name: 'Telugu' },
    tgk: { alpha2: 'tg', alpha3: 'tgk', name: 'Tajik' },
    tgl: { alpha2: 'tl', alpha3: 'tgl', name: 'Tagalog' },
    tha: { alpha2: 'th', alpha3: 'tha', name: 'Thai' },
    tir: { alpha2: 'ti', alpha3: 'tir', name: 'Tigrinya' },
    ton: { alpha2: 'to', alpha3: 'ton', name: 'Tonga' },
    tsn: { alpha2: 'tn', alpha3: 'tsn', name: 'Tswana' },
    tso: { alpha2: 'ts', alpha3: 'tso', name: 'Tsonga' },
    tuk: { alpha2: 'tk', alpha3: 'tuk', name: 'Turkmen' },
    tur: { alpha2: 'tr', alpha3: 'tur', name: 'Turkish' },
    twi: { alpha2: 'tw', alpha3: 'twi', name: 'Twi' },
    uig: { alpha2: 'ug', alpha3: 'uig', name: 'Uighur' },
    ukr: { alpha2: 'uk', alpha3: 'ukr', name: 'Ukrainian' },
    urd: { alpha2: 'ur', alpha3: 'urd', name: 'Urdu' },
    uzb: { alpha2: 'uz', alpha3: 'uzb', name: 'Uzbek' },
    ven: { alpha2: 've', alpha3: 'ven', name: 'Venda' },
    vie: { alpha2: 'vi', alpha3: 'vie', name: 'Vietnamese' },
    vol: { alpha2: 'vo', alpha3: 'vol', name: 'Volapük' },
    wln: { alpha2: 'wa', alpha3: 'wln', name: 'Walloon' },
    wol: { alpha2: 'wo', alpha3: 'wol', name: 'Wolof' },
    xho: { alpha2: 'xh', alpha3: 'xho', name: 'Xhosa' },
    yid: { alpha2: 'yi', alpha3: 'yid', name: 'Yiddish' },
    yor: { alpha2: 'yo', alpha3: 'yor', name: 'Yoruba' },
    zha: { alpha2: 'za', alpha3: 'zha', name: 'Zhuang' },
    cmn: { alpha2: 'zh', alpha3: 'cmn', name: 'Chinese' },
    zul: { alpha2: 'zu', alpha3: 'zul', name: 'Zulu' }
  });
  expect(language.languagesAlpha2).toEqual({
    aa: { alpha2: 'aa', alpha3: 'aar', name: 'Afar' },
    ab: { alpha2: 'ab', alpha3: 'abk', name: 'Abkhazian' },
    af: { alpha2: 'af', alpha3: 'afr', name: 'Afrikaans' },
    ak: { alpha2: 'ak', alpha3: 'aka', name: 'Akan' },
    am: { alpha2: 'am', alpha3: 'amh', name: 'Amharic' },
    ar: { alpha2: 'ar', alpha3: 'arb', name: 'Arabic' },
    an: { alpha2: 'an', alpha3: 'arg', name: 'Aragonese' },
    as: { alpha2: 'as', alpha3: 'asm', name: 'Assamese' },
    av: { alpha2: 'av', alpha3: 'ava', name: 'Avaric' },
    ae: { alpha2: 'ae', alpha3: 'ave', name: 'Avestan' },
    ay: { alpha2: 'ay', alpha3: 'aym', name: 'Aymara' },
    az: { alpha2: 'az', alpha3: 'aze', name: 'Azerbaijani' },
    ba: { alpha2: 'ba', alpha3: 'bak', name: 'Bashkir' },
    bm: { alpha2: 'bm', alpha3: 'bam', name: 'Bambara' },
    be: { alpha2: 'be', alpha3: 'bel', name: 'Belarusian' },
    bn: { alpha2: 'bn', alpha3: 'ben', name: 'Bengali' },
    bh: { alpha2: 'bh', alpha3: 'bih', name: 'Bihari languages' },
    bi: { alpha2: 'bi', alpha3: 'bis', name: 'Bislama' },
    bo: { alpha2: 'bo', alpha3: 'bod', name: 'Tibetan' },
    bs: { alpha2: 'bs', alpha3: 'bos', name: 'Bosnian' },
    br: { alpha2: 'br', alpha3: 'bre', name: 'Breton' },
    bg: { alpha2: 'bg', alpha3: 'bul', name: 'Bulgarian' },
    ca: { alpha2: 'ca', alpha3: 'cat', name: 'Catalan' },
    cs: { alpha2: 'cs', alpha3: 'ces', name: 'Czech' },
    ch: { alpha2: 'ch', alpha3: 'cha', name: 'Chamorro' },
    ce: { alpha2: 'ce', alpha3: 'che', name: 'Chechen' },
    cu: { alpha2: 'cu', alpha3: 'chu', name: 'Church Slavic' },
    cv: { alpha2: 'cv', alpha3: 'chv', name: 'Chuvash' },
    kw: { alpha2: 'kw', alpha3: 'cor', name: 'Cornish' },
    co: { alpha2: 'co', alpha3: 'cos', name: 'Corsican' },
    cr: { alpha2: 'cr', alpha3: 'cre', name: 'Cree' },
    cy: { alpha2: 'cy', alpha3: 'cym', name: 'Welsh' },
    da: { alpha2: 'da', alpha3: 'dan', name: 'Danish' },
    de: { alpha2: 'de', alpha3: 'deu', name: 'German' },
    dv: { alpha2: 'dv', alpha3: 'div', name: 'Divehi' },
    dz: { alpha2: 'dz', alpha3: 'dzo', name: 'Dzongkha' },
    el: { alpha2: 'el', alpha3: 'ell', name: 'Greek' },
    en: { alpha2: 'en', alpha3: 'eng', name: 'English' },
    eo: { alpha2: 'eo', alpha3: 'epo', name: 'Esperanto' },
    et: { alpha2: 'et', alpha3: 'est', name: 'Estonian' },
    eu: { alpha2: 'eu', alpha3: 'eus', name: 'Basque' },
    ee: { alpha2: 'ee', alpha3: 'ewe', name: 'Ewe' },
    fo: { alpha2: 'fo', alpha3: 'fao', name: 'Faroese' },
    fa: { alpha2: 'fa', alpha3: 'fas', name: 'Persian' },
    fj: { alpha2: 'fj', alpha3: 'fij', name: 'Fijian' },
    fi: { alpha2: 'fi', alpha3: 'fin', name: 'Finnish' },
    fr: { alpha2: 'fr', alpha3: 'fra', name: 'French' },
    fy: { alpha2: 'fy', alpha3: 'fry', name: 'Western Frisian' },
    ff: { alpha2: 'ff', alpha3: 'ful', name: 'Fulah' },
    gd: { alpha2: 'gd', alpha3: 'gla', name: 'Gaelic' },
    ga: { alpha2: 'ga', alpha3: 'gle', name: 'Irish' },
    gv: { alpha2: 'gv', alpha3: 'glv', name: 'Manx' },
    gn: { alpha2: 'gn', alpha3: 'grn', name: 'Guarani' },
    gu: { alpha2: 'gu', alpha3: 'guj', name: 'Gujarati' },
    ht: { alpha2: 'ht', alpha3: 'hat', name: 'Haitian' },
    ha: { alpha2: 'ha', alpha3: 'hau', name: 'Hausa' },
    he: { alpha2: 'he', alpha3: 'heb', name: 'Hebrew' },
    hz: { alpha2: 'hz', alpha3: 'her', name: 'Herero' },
    hi: { alpha2: 'hi', alpha3: 'hin', name: 'Hindi' },
    ho: { alpha2: 'ho', alpha3: 'hmo', name: 'Hiri Motu' },
    hr: { alpha2: 'hr', alpha3: 'hrv', name: 'Croatian' },
    hu: { alpha2: 'hu', alpha3: 'hun', name: 'Hungarian' },
    hy: { alpha2: 'hy', alpha3: 'hye', name: 'Armenian' },
    ig: { alpha2: 'ig', alpha3: 'ibo', name: 'Igbo' },
    io: { alpha2: 'io', alpha3: 'ido', name: 'Ido' },
    ii: { alpha2: 'ii', alpha3: 'iii', name: 'Sichuan Yi' },
    iu: { alpha2: 'iu', alpha3: 'iku', name: 'Inuktitut' },
    ie: { alpha2: 'ie', alpha3: 'ile', name: 'Interlingue' },
    ia: { alpha2: 'ia', alpha3: 'ina', name: 'Interlingua' },
    id: { alpha2: 'id', alpha3: 'ind', name: 'Indonesian' },
    ik: { alpha2: 'ik', alpha3: 'ipk', name: 'Inupiaq' },
    is: { alpha2: 'is', alpha3: 'isl', name: 'Icelandic' },
    it: { alpha2: 'it', alpha3: 'ita', name: 'Italian' },
    jv: { alpha2: 'jv', alpha3: 'jav', name: 'Javanese' },
    ja: { alpha2: 'ja', alpha3: 'jpn', name: 'Japanese' },
    kl: { alpha2: 'kl', alpha3: 'kal', name: 'Kalaallisut' },
    kn: { alpha2: 'kn', alpha3: 'kan', name: 'Kannada' },
    ks: { alpha2: 'ks', alpha3: 'kas', name: 'Kashmiri' },
    ka: { alpha2: 'ka', alpha3: 'kat', name: 'Georgian' },
    kr: { alpha2: 'kr', alpha3: 'kau', name: 'Kanuri' },
    kk: { alpha2: 'kk', alpha3: 'kaz', name: 'Kazakh' },
    km: { alpha2: 'km', alpha3: 'khm', name: 'Central Khmer' },
    ki: { alpha2: 'ki', alpha3: 'kik', name: 'Kikuyu' },
    rw: { alpha2: 'rw', alpha3: 'kin', name: 'Kinyarwanda' },
    ky: { alpha2: 'ky', alpha3: 'kir', name: 'Kirghiz' },
    kv: { alpha2: 'kv', alpha3: 'kom', name: 'Komi' },
    kg: { alpha2: 'kg', alpha3: 'kon', name: 'Kongo' },
    ko: { alpha2: 'ko', alpha3: 'kor', name: 'Korean' },
    kj: { alpha2: 'kj', alpha3: 'kua', name: 'Kuanyama' },
    ku: { alpha2: 'ku', alpha3: 'kur', name: 'Kurdish' },
    lo: { alpha2: 'lo', alpha3: 'lao', name: 'Lao' },
    la: { alpha2: 'la', alpha3: 'lat', name: 'Latin' },
    lv: { alpha2: 'lv', alpha3: 'lav', name: 'Latvian' },
    li: { alpha2: 'li', alpha3: 'lim', name: 'Limburgan' },
    ln: { alpha2: 'ln', alpha3: 'lin', name: 'Lingala' },
    lt: { alpha2: 'lt', alpha3: 'lit', name: 'Lithuanian' },
    lb: { alpha2: 'lb', alpha3: 'ltz', name: 'Luxembourgish' },
    lu: { alpha2: 'lu', alpha3: 'lub', name: 'Luba-Katanga' },
    lg: { alpha2: 'lg', alpha3: 'lug', name: 'Ganda' },
    mh: { alpha2: 'mh', alpha3: 'mah', name: 'Marshallese' },
    ml: { alpha2: 'ml', alpha3: 'mal', name: 'Malayalam' },
    mr: { alpha2: 'mr', alpha3: 'mar', name: 'Marathi' },
    mk: { alpha2: 'mk', alpha3: 'mkd', name: 'Macedonian' },
    mg: { alpha2: 'mg', alpha3: 'mlg', name: 'Malagasy' },
    mt: { alpha2: 'mt', alpha3: 'mlt', name: 'Maltese' },
    mn: { alpha2: 'mn', alpha3: 'mon', name: 'Mongolian' },
    mi: { alpha2: 'mi', alpha3: 'mri', name: 'Maori' },
    ms: { alpha2: 'ms', alpha3: 'msa', name: 'Malay' },
    my: { alpha2: 'my', alpha3: 'mya', name: 'Burmese' },
    na: { alpha2: 'na', alpha3: 'nau', name: 'Nauru' },
    nv: { alpha2: 'nv', alpha3: 'nav', name: 'Navajo' },
    nr: { alpha2: 'nr', alpha3: 'nbl', name: 'Ndebele, South' },
    nd: { alpha2: 'nd', alpha3: 'nde', name: 'Ndebele, North' },
    ng: { alpha2: 'ng', alpha3: 'ndo', name: 'Ndonga' },
    ne: { alpha2: 'ne', alpha3: 'nep', name: 'Nepali' },
    nl: { alpha2: 'nl', alpha3: 'nld', name: 'Dutch' },
    nn: { alpha2: 'nn', alpha3: 'nno', name: 'Norwegian Nynorsk' },
    nb: { alpha2: 'nb', alpha3: 'nob', name: 'Bokmål, Norwegian' },
    no: { alpha2: 'no', alpha3: 'nor', name: 'Norwegian' },
    ny: { alpha2: 'ny', alpha3: 'nya', name: 'Chichewa' },
    oc: { alpha2: 'oc', alpha3: 'oci', name: 'Occitan' },
    oj: { alpha2: 'oj', alpha3: 'oji', name: 'Ojibwa' },
    or: { alpha2: 'or', alpha3: 'ori', name: 'Oriya' },
    om: { alpha2: 'om', alpha3: 'orm', name: 'Oromo' },
    os: { alpha2: 'os', alpha3: 'oss', name: 'Ossetian' },
    pa: { alpha2: 'pa', alpha3: 'pan', name: 'Panjabi' },
    pi: { alpha2: 'pi', alpha3: 'pli', name: 'Pali' },
    pl: { alpha2: 'pl', alpha3: 'pol', name: 'Polish' },
    pt: { alpha2: 'pt', alpha3: 'por', name: 'Portuguese' },
    ps: { alpha2: 'ps', alpha3: 'pus', name: 'Pushto' },
    qu: { alpha2: 'qu', alpha3: 'que', name: 'Quechua' },
    rm: { alpha2: 'rm', alpha3: 'roh', name: 'Romansh' },
    ro: { alpha2: 'ro', alpha3: 'ron', name: 'Romanian' },
    rn: { alpha2: 'rn', alpha3: 'run', name: 'Rundi' },
    ru: { alpha2: 'ru', alpha3: 'rus', name: 'Russian' },
    sg: { alpha2: 'sg', alpha3: 'sag', name: 'Sango' },
    sa: { alpha2: 'sa', alpha3: 'san', name: 'Sanskrit' },
    si: { alpha2: 'si', alpha3: 'sin', name: 'Sinhala' },
    sk: { alpha2: 'sk', alpha3: 'slk', name: 'Slovak' },
    sl: { alpha2: 'sl', alpha3: 'slv', name: 'Slovenian' },
    se: { alpha2: 'se', alpha3: 'sme', name: 'Northern Sami' },
    sm: { alpha2: 'sm', alpha3: 'smo', name: 'Samoan' },
    sn: { alpha2: 'sn', alpha3: 'sna', name: 'Shona' },
    sd: { alpha2: 'sd', alpha3: 'snd', name: 'Sindhi' },
    so: { alpha2: 'so', alpha3: 'som', name: 'Somali' },
    st: { alpha2: 'st', alpha3: 'sot', name: 'Sotho, Southern' },
    es: { alpha2: 'es', alpha3: 'spa', name: 'Spanish' },
    sq: { alpha2: 'sq', alpha3: 'sqi', name: 'Albanian' },
    sc: { alpha2: 'sc', alpha3: 'srd', name: 'Sardinian' },
    sr: { alpha2: 'sr', alpha3: 'srp', name: 'Serbian' },
    ss: { alpha2: 'ss', alpha3: 'ssw', name: 'Swati' },
    su: { alpha2: 'su', alpha3: 'sun', name: 'Sundanese' },
    sw: { alpha2: 'sw', alpha3: 'swa', name: 'Swahili' },
    sv: { alpha2: 'sv', alpha3: 'swe', name: 'Swedish' },
    ty: { alpha2: 'ty', alpha3: 'tah', name: 'Tahitian' },
    ta: { alpha2: 'ta', alpha3: 'tam', name: 'Tamil' },
    tt: { alpha2: 'tt', alpha3: 'tat', name: 'Tatar' },
    te: { alpha2: 'te', alpha3: 'tel', name: 'Telugu' },
    tg: { alpha2: 'tg', alpha3: 'tgk', name: 'Tajik' },
    tl: { alpha2: 'tl', alpha3: 'tgl', name: 'Tagalog' },
    th: { alpha2: 'th', alpha3: 'tha', name: 'Thai' },
    ti: { alpha2: 'ti', alpha3: 'tir', name: 'Tigrinya' },
    to: { alpha2: 'to', alpha3: 'ton', name: 'Tonga' },
    tn: { alpha2: 'tn', alpha3: 'tsn', name: 'Tswana' },
    ts: { alpha2: 'ts', alpha3: 'tso', name: 'Tsonga' },
    tk: { alpha2: 'tk', alpha3: 'tuk', name: 'Turkmen' },
    tr: { alpha2: 'tr', alpha3: 'tur', name: 'Turkish' },
    tw: { alpha2: 'tw', alpha3: 'twi', name: 'Twi' },
    ug: { alpha2: 'ug', alpha3: 'uig', name: 'Uighur' },
    uk: { alpha2: 'uk', alpha3: 'ukr', name: 'Ukrainian' },
    ur: { alpha2: 'ur', alpha3: 'urd', name: 'Urdu' },
    uz: { alpha2: 'uz', alpha3: 'uzb', name: 'Uzbek' },
    ve: { alpha2: 've', alpha3: 'ven', name: 'Venda' },
    vi: { alpha2: 'vi', alpha3: 'vie', name: 'Vietnamese' },
    vo: { alpha2: 'vo', alpha3: 'vol', name: 'Volapük' },
    wa: { alpha2: 'wa', alpha3: 'wln', name: 'Walloon' },
    wo: { alpha2: 'wo', alpha3: 'wol', name: 'Wolof' },
    xh: { alpha2: 'xh', alpha3: 'xho', name: 'Xhosa' },
    yi: { alpha2: 'yi', alpha3: 'yid', name: 'Yiddish' },
    yo: { alpha2: 'yo', alpha3: 'yor', name: 'Yoruba' },
    za: { alpha2: 'za', alpha3: 'zha', name: 'Zhuang' },
    zh: { alpha2: 'zh', alpha3: 'cmn', name: 'Chinese' },
    zu: { alpha2: 'zu', alpha3: 'zul', name: 'Zulu' }
  });
});

// Test the sortDetectedLanguages() method
test('sortDetectedLanguages() should sort and filter the detected languages based on the allow list', () => {
  const detectedLanguages = [
    { alpha3: 'en', score: 0.8 },
    { alpha3: 'fr', score: 0.6 },
    { alpha3: 'es', score: 0.4 },
    { alpha3: 'de', score: 0.2 },
  ];
  const allowList = ['en', 'fr'];
  const language = new Language();
  const sortedLanguage = language.sortDetectedLanguages(detectedLanguages, allowList);
  expect(sortedLanguage).toEqual({ alpha3: 'en', score: 0.8 });
});

// Test the transformAllowList() method
test('transformAllowList() should transform the allow list by converting language codes to alpha-3 codes', () => {
  const allowList = ['en', 'fr', 'es', 'de'];
  const language = new Language();
  const transformedAllowList = language.transformAllowList(allowList);
  expect(transformedAllowList).toEqual(['eng', 'fra', 'spa', 'deu']);
});

// Test the guess() method
test('guess() should guess the language of the given utterance', () => {
  const utterance = 'Hello World';
  const allowList = ['en', 'fr'];
  const limit = 1;
  const language = new Language();
  const guessedLanguage = language.guess(utterance, allowList, limit);
  expect(guessedLanguage).toEqual([{ alpha3: 'eng', alpha2: 'en', language: 'English', score: 1 }]);
});

test('getOccurrence should return the correct occurrence count', () => {
  // Test case 1: value contains multiple occurrences of expression
  expect(Language.getOccurrence('hello hello hello', /hello/g)).toBe(0.17647058823529413);

  // Test case 2: value contains no occurrences of expression
  expect(Language.getOccurrence('hello world', /foo/g)).toBe(0);

  // Test case 3: value is an empty string
  expect(Language.getOccurrence('', /hello/g)).toBe(0);

  // Test case 4: value contains a single occurrence of expression
  expect(Language.getOccurrence('hello world', /world/g)).toBe(0.09090909090909091);

  // Test case 5: value contains overlapping occurrences of expression
  expect(Language.getOccurrence('aaaaaa', /aa/g)).toBe(0.5);
});

describe('getTopScript', () => {
  it('should return ["Latin", 1] when input is a Latin script', () => {
    const result = Language.getTopScript('Hello World');
    assert.deepStrictEqual(result, ['Latin', 1]);
  });

  it('should return the most occurring script when input is a non-Latin script', () => {
    const result = Language.getTopScript('مرحبا بالعالم');
    assert.deepStrictEqual(result, ['Arabic', 0.9230769230769231]);
  });

  it('should return the first occurring script when multiple scripts have the same occurrence count', () => {
    const result = Language.getTopScript('你好世界');
    assert.deepStrictEqual(result, ['cmn', 1]);
  });

  it('should return [undefined, -1] when input is an empty string', () => {
    const result = Language.getTopScript('');
    assert.deepStrictEqual(result, ["und", 1]);
  });

  it('should return the correct script and occurrence count for a given input', () => {
    const result = Language.getTopScript('Hello 你好 مرحبا');
    assert.deepStrictEqual(result, ['Latin', 0.35714285714285715]);
  });
});

describe('transformAllowList', () => {
  let languageGuesser;

  beforeEach(() => {
    languageGuesser = new Language();
  });

  it('should return an empty array if allowList is empty', () => {
    const allowList = [];
    const result = languageGuesser.transformAllowList(allowList);
    expect(result).toEqual([]);
  });

  it('should return an array of alpha-3 language codes for valid alpha-2 language codes', () => {
    const allowList = ['en', 'fr', 'de'];
    const result = languageGuesser.transformAllowList(allowList);
    expect(result).toEqual(['eng', 'fra', 'deu']);
  });

  it('should ignore invalid language codes', () => {
    const allowList = ['en', 'es', 'it', 'jp'];
    const result = languageGuesser.transformAllowList(allowList);
    expect(result).toEqual(['eng', 'spa', 'ita']);
  });

  it('should ignore elements that are not strings', () => {
    const allowList = ['en', 123, true, null, 'fr'];
    const result = languageGuesser.transformAllowList(allowList);
    expect(result).toEqual(['eng', 'fra']);
  });
});