import React, { useState } from 'react'
import logo from './logo.svg'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const countAtom = atom({
  key: 'countAtom',
  default: 0,  
});

const squaredCountAtom = selector({
  key: 'squaredCountAtom',
  get: ({ get }) => {
    const count = get(countAtom);
    return count ** 2;
  },
})

function App() {
  const [count, setCount] = useRecoilState(countAtom);
  const squared = useRecoilValue(squaredCountAtom);

  return (
    <div>
      <h2>current: {count}</h2>
      <h2>squared: {squared}</h2>
      <button onClick={() => setCount(count + 1)}>add up</button>
    </div>
  );
}

export default App
