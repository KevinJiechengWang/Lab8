const formatVolumeIconPath = require('../assets/scripts/main');

describe('volume icon path', () => {
  test('volume is 70, should return level 3', () => {
    expect(formatVolumeIconPath(70)).toBe("./assets/media/icons/volume-level-3.svg");
  });

  test('volume is 40, should return level 2', () => {
    expect(formatVolumeIconPath(40)).toBe("./assets/media/icons/volume-level-2.svg");
  });
  
  test('volume is 10, should return level 1', () => {
    expect(formatVolumeIconPath(10)).toBe("./assets/media/icons/volume-level-1.svg");
  });

  test('volume is 0, should return level 0', () => {
    expect(formatVolumeIconPath(0)).toBe("./assets/media/icons/volume-level-0.svg");
  });
});