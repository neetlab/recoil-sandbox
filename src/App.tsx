import React, { useMemo } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  countAtom,
  squaredCountAtom,
} from './atoms';
import {
  DynCounter,
} from './DynCounter';

function App() {
  const [count, setCount] = useRecoilState(countAtom);
  const squared = useRecoilValue(squaredCountAtom);
  const seq = useMemo(() => Array.from({ length: 10 }, (_, i) => i), []);

  return (
    <div>
      <h2>current: {count}</h2>
      <h2>squared: {squared}</h2>
      <button onClick={() => setCount(count + 1)}>add up</button>

      <h2>Dynamic</h2>
      <ul>
        {seq.map((value) => (
          <DynCounter key={value.toString()} id={value.toString()} />
        ))}
      </ul>
    </div>
  );
}

export default App
