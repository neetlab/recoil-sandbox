import React from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { countFamily } from "./atoms";

export type DynCounterProps = {
  readonly key: string;
  readonly id: string;
}

export const DynCounter = (props: DynCounterProps) => {
  const { id } = props;
  const [count, increase] = useRecoilState(countFamily(id));

  return (
    <div style={{ display: 'flex' }}>
      <span style={{ flex: '1 0 auto' }}>{count}</span>
      <button onClick={() => increase(count + 1)}>Add</button>
    </div>
  )
};

