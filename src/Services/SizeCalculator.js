// @flow
import R from 'ramda';

type Words = Array<string>;
type Sentence = Array<Words>;

const MAX_SENTENCES = 8;

const settings = (customOptions: Object = {}) => ({
  minFontSize: -1 / 0,
  maxFontSize: 1 / 0,
  ...customOptions,
});

const resizer = (width: number, compressor: number = 0.5): number => {
  const floatMaxfontSize: number = parseFloat(settings.maxFontSize);
  const floatMinFontSize: number = parseFloat(settings.minFontSize);
  const minimumCompressedSize: number = R.min(width / compressor, floatMaxfontSize);

  return Math.round(R.max(minimumCompressedSize, floatMinFontSize));
};

const separator = R.curry((n, list) => {
  const len = list.length;
  const f = (_v, idx) => Math.floor(idx * n / len);
  return R.values(R.addIndex(R.groupBy)(f, list));
});

const sentenceConstructor = (words: Words, amount = MAX_SENTENCES): Sentence => (
  separator(amount, words)
);

const sentenceGetter = (words: Words): Sentence => {
  if (words.length === 0) return [];
  return sentenceConstructor(words);
};

const SizeCalculator = {
  calculate: (width: number, count: number): number => resizer(width, count),
  sentences: (input: string = ''): Sentence => sentenceGetter(input.split(' ')),
  flattenSentences: (input: Array<any>): Array<any> => R.flatten(input),
};

export default SizeCalculator;
