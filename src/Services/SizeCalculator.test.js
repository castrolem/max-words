import SizeCalculator from './SizeCalculator';

describe('SizeCalculator', () => {
  const MOCKED_DEVICE_DIMENSIONS = [
    {
      expectedFontSize: [2475, 62, 21, 18],
      height: 2436,
      width: 1125,
    },
    {
      expectedFontSize: [2376, 59, 20, 17],
      height: 1920,
      width: 1080,
    },
  ];

  describe('calculate', () => {
    it('returns the biggest size possible to display with the current dimension set', () => {
      const characterCountTest = [1, 40, 120, 140];

      MOCKED_DEVICE_DIMENSIONS.forEach((device) => {
        characterCountTest.forEach((characterCount, idx) => {
          const calculatedSize = SizeCalculator.calculate(device.width, characterCount);
          expect(calculatedSize).toEqual(device.expectedFontSize[idx]);
        });
      });
    });
  });

  describe('words', () => {
    it('returns an array of Lines with words that fit each to the maximum character amount allowed', () => {
      const paragraph = 'Hello Darkness my old Friend, I come to see you here again';
      const expected = [
        'Hello Darkness',
        'my old Friend,',
        'I come to see',
        'you here again',
      ];
      expect(SizeCalculator.words(paragraph)).toEqual(expected);
    });

    it('allows repeated words in different lines', () => {
      const paragraph = 'Hello darkness my old Friend, I come to see darkness again';
      const expected = [
        'Hello darkness',
        'my old Friend,',
        'I come to see',
        'darkness again',
      ];
      expect(SizeCalculator.words(paragraph)).toEqual(expected);
    });
  });
});
