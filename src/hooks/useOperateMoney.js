import { useState, useCallback, useEffect } from 'react';
import checkProfits from '../utils/checkProfits';
import transferMoneyByProfits from '../utils/transferMoneyByProfits';

const useOperateMoney = (initialBankState) => {
  const [banksState, setBanksState] = useState(initialBankState);
  const [isAfterCapitalization, setIsAfterCapitalization] = useState(false);

  const handleCapitalization = useCallback((bankId, interest) => {
    setBanksState(prevBankInuse => prevBankInuse.map(bank => {
      if(bank.id === bankId) {
        const percent = interest / 100;
        const months = 12;

        bank.money += Math.floor((bank.money * percent) / months);
        bank.interest = interest;
      }
      return bank;
    }));
    setIsAfterCapitalization(true);
  }, [setBanksState, setIsAfterCapitalization]);

  useEffect(() => {
    if(isAfterCapitalization) {
      const bestProfits = checkProfits(banksState);
      const newBanksState = transferMoneyByProfits(bestProfits, banksState);

      setBanksState(newBanksState);
      setIsAfterCapitalization(false);
    }
  }, [isAfterCapitalization, banksState])

  return {
    banksState,
    handleCapitalization,
  }
};

export default useOperateMoney;