const calculateTransferedMoney = (money, commission) => {
  return Math.floor(money - (money * (commission / 100)));
}

const transferMoneyByProfits = (profits, banksState) => {
  const banksStateCopy = Object.assign([], banksState);
  
  profits.forEach((profit) => {
    const bankFromIndex = banksStateCopy.findIndex(bank => bank.id === profit.bankFrom);
    const bankToIndex = banksStateCopy.findIndex(bank => bank.id === profit.bankTo);

    const bankFrom = banksStateCopy[bankFromIndex];

    const transferMoney = calculateTransferedMoney(bankFrom.money, bankFrom.L2);

    banksStateCopy[bankToIndex].money += transferMoney;
    banksStateCopy[bankFromIndex].money = 0;
  });

  return banksStateCopy;
}

export default transferMoneyByProfits;