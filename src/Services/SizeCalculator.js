// @flow
import R from 'ramda';

type Words = Array<string>;

const MAX_CHARACTERS_PER_LINE = 15;

const settings = (customOptions: Object = {}) => ({
  minFontSize: -1 / 0,
  maxFontSize: 1 / 0,
  ...customOptions,
});

const resizer = (width: number, compressor: number = 0.5): number => {
  const floatMaxfontSize: number = parseFloat(settings.maxFontSize);
  const floatMinFontSize: number = parseFloat(settings.minFontSize);
  const minimumCompressedSize: number = R.min(width / (compressor / 2.2), floatMaxfontSize);

  return Math.round(R.max(minimumCompressedSize, floatMinFontSize));
};

const sentenceConstructor = (acc: string, item: string): string => `${acc} ${item}`.trim();

const isSentenceBeyondCharacterCount = (acc: string, item: string): boolean => (
  sentenceConstructor(acc, item).length <= MAX_CHARACTERS_PER_LINE
);

const lineConstructor = (words: Words): string => (
  R.reduceWhile(isSentenceBeyondCharacterCount, sentenceConstructor, [], words)
);

const findRemainingWords = (sentence: Words, remains: Words) => (
  R.filter((word: string) => !sentence.join(' ').includes(word), remains)
);

const linesConstructor = (words: Words, firstLine: string) => {
  const lines = [firstLine];
  return R.reduce(
    (acc: Words, _item: any) => { // eslint-disable-line no-unused-vars
      const remains = findRemainingWords(acc, words);
      lines.push(lineConstructor(remains));
      return acc;
    },
    lines,
    words
  );
};

const getLines = (words: Words): Words => {
  if (words.length === 0) return [];
  return R.flatten(linesConstructor(words, lineConstructor(words)));
};

const SizeCalculator = {
  calculate: (width: number, count: number): number => resizer(width, count),
  words: (input: string = ''): Words => getLines(input.split(' ')),
};

export default SizeCalculator;
