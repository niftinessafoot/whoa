import { throttle, debounce } from '../src/index';

const cb = {
  thr: (arg) => {
    return arg;
  },
};

describe('whoa - throttle and debounce library', () => {
  describe('throttle()', () => {
    it('should limit extra callbacks from firing', () => {
      const spy = jest.spyOn(cb, 'thr');
      const handler = throttle(cb.thr, 100);
      handler('one');
      handler('two');
      handler('three');

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('one');
    });

    it('should default to one second delay', () => {
      jest.useFakeTimers();
      jest.spyOn(global, 'setTimeout');
      const handler = throttle(cb.thr);
      handler('one');

      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
    });

    it('should fire again after the delay', async () => {
      jest.useFakeTimers();

      const spy = jest.spyOn(cb, 'thr');
      const handler = throttle(cb.thr, 100);
      handler('one');
      handler('two');
      handler('three');

      jest.advanceTimersByTime(101);

      handler('delayed');

      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenNthCalledWith(1, 'one');
      expect(spy).toHaveBeenNthCalledWith(2, 'delayed');
    });
  });

  describe('debounce()', () => {
    it('should fire once despite repeated calls', () => {
      const spy = jest.spyOn(cb, 'thr');
      const handler = debounce(cb.thr, 100);

      handler('one');
      handler('two');
      handler('three');

      setTimeout(() => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith('three');
      }, 100);
    });

    it('should default to one second delay', () => {
      jest.useFakeTimers();
      jest.spyOn(global, 'setTimeout');
      const handler = debounce(cb.thr);
      handler('one');

      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
    });

    it('should fire again after delay', () => {
      jest.useFakeTimers();

      const spy = jest.spyOn(cb, 'thr');
      const handler = debounce(cb.thr, 100);
      handler('one');
      handler('two');
      handler('three');

      jest.advanceTimersByTime(100);

      handler('delayed');
      jest.advanceTimersByTime(100);

      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenNthCalledWith(1, 'three');
      expect(spy).toHaveBeenNthCalledWith(2, 'delayed');
    });
  });
});
