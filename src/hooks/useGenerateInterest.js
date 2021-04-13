import { useState, useCallback } from 'react';
import generateInterest from '../utils/generateInterest';

const useGenerateInterest = (startInteres) => {
  //interest generated after capitalizaton
  const [interest, setInterest] = useState(startInteres);

  const handleGenerateInterest = useCallback(() => {
    setInterest(generateInterest());
  }, [setInterest]);

  return {
    interest,
    handleGenerateInterest,
  }
}

export default useGenerateInterest;