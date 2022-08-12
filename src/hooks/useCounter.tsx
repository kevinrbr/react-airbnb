import { useState, useCallback } from "react";

export const useCounter = (num: number) => {
  const [count, setCount] = useState<number[]>(Array(num).fill(0)); // count = [0,0,0,0];
  const [total, setTotal] = useState<number>(0);

  const increment = useCallback(
    (index: number) => {
      const newCount = [...count]; // copie de count
      newCount[index]++; // pour l'index en question on incremente le compteur ex [0,1,0,0] si i = 1
      setCount(newCount);
      setTotal(total + 1);
    },
    [count]
  );

  const decrement = useCallback(
    (index: number) => {
      const newCount = [...count];
      newCount[index]--; // pour l'index en question on decremente le compteur ex [2,1,0,0] -> [2,0,0,0] si i = 1
      setCount(newCount);
      setTotal(total - 1);
    },
    [count]
  );

  return { count, increment, decrement, total };
};
