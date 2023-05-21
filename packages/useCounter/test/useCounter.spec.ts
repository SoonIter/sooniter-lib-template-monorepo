import { act, renderHook } from '@testing-library/react-hooks';
import { describe, expect, it } from 'vitest';
import useCounter from '../src/useCounter';

describe('Test useCounter', () => {
  describe('increment', () => {
    it('increase counter by 1', () => {
      const { result } = renderHook(() => useCounter());

      act(() => {
        result.current.increment();
      });

      expect(result.current.count).toBe(1);
    });
  });

  describe('decrement', () => {
    it('decrease counter by 1', () => {
      const { result } = renderHook(() => useCounter());

      act(() => {
        result.current.decrement();
      });

      expect(result.current.count).toBe(-1);
    });
  });
});
