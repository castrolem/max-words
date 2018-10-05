import SizeCalculator from './SizeCalculator';

describe('SizeCalculator', () => {
  const MOCKED_DEVICE_DIMENSIONS = [
    {
      expectedFontSize: [1125, 28],
      height: 2436,
      width: 1125,
    },
    {
      expectedFontSize: [1080, 27],
      height: 1920,
      width: 1080,
    },
  ];

  describe('#calculate', () => {
    it('returns the biggest size possible to display with the current dimension set', () => {
      const characterCountTest = [1, 40];

      MOCKED_DEVICE_DIMENSIONS.forEach((device) => {
        characterCountTest.forEach((characterCount, idx) => {
          const calculatedSize = SizeCalculator.calculate(device.width, characterCount);
          expect(calculatedSize).toEqual(device.expectedFontSize[idx]);
        });
      });
    });
  });

  describe('#sentences', () => {
    it('returns an array of Lines with sentences that fit each to the maximum character amount allowed', () => {
      const paragraph = 'Hello Darkness my old Friend, I come to see you here again';
      const expected = [
        ['Hello', 'Darkness'],
        ['my'],
        ['old', 'Friend,'],
        ['I'],
        ['come', 'to'],
        ['see'],
        ['you', 'here'],
        ['again'],
      ];
      expect(SizeCalculator.sentences(paragraph)).toEqual(expected);
    });

    it('allows repeated sentences in different lines', () => {
      const paragraph = 'Hello darkness my old Friend, I come to see darkness again';
      const expected = [
        ['Hello', 'darkness'],
        ['my'],
        ['old', 'Friend,'],
        ['I'],
        ['come'],
        ['to', 'see'],
        ['darkness'],
        ['again'],
      ];
      expect(SizeCalculator.sentences(paragraph)).toEqual(expected);
    });
  });

  describe('#flattenSentences', () => {
    it('flattens an array of sentences to an array of words', () => {
      const sentences = [
        ['Hello', 'darkness'],
        ['my'],
        ['old', 'Friend'],
      ];
      const words = ['Hello', 'darkness', 'my', 'old', 'Friend'];
      expect(SizeCalculator.flattenSentences(sentences)).toEqual(words);
    });
  });
});
