import { atom, atomFamily, selector } from 'recoil';

export const countAtom = atom({
  key: 'countAtom',
  default: 0,  
});

export const squaredCountAtom = selector({
  key: 'squaredCountAtom',
  get: ({ get }) => {
    const count = get(countAtom);
    return count ** 2;
  },
})

export const countFamily = atomFamily({
  key: 'countFamily',
  default: 0,
});
