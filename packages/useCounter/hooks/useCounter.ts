import { useCallback, useState } from 'react';
import { add } from '@ice-fancy/shared'

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(x => add(x, 1)), []);
  const decrement = useCallback(() => setCount(x => add(x, -1)), []);

  return { count, increment, decrement };
}
export default useCounter;
