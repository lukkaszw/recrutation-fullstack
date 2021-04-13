const checkProfits = (banksState) => {

  const profits = banksState.map((bankState) => {
    return banksState
      .filter(bank => bank.id !== bankState.id)
      .map(bank => {
        const months = 12;

        const profitability = bankState.interest / months - bank.L2;
        if(profitability > 0) {
          return {
            bankFrom: bank.id,
            bankTo: bankState.id,
            profitability,
          }
        } 
        return null;
      })
      .filter(profitability => !!profitability)
      .reduce((prevProfitabilty, nextProfitabilty) => {
        if(prevProfitabilty.profitablitity > nextProfitabilty.profitability) {
          return prevProfitabilty;
        }
        return nextProfitabilty;
      }, {})
  })
  .filter(possibleProfits => !!possibleProfits.profitability);

  if(profits.length === 0) {
    return [];
  }

  const bestProfits = profits.reduce((prevProfits, nextProfit) => {
    const sameBankIndex = prevProfits.findIndex(profit => 
      (profit.bankFrom === nextProfit.bankFrom || profit.bankFrom === nextProfit.bankTo));
    if(sameBankIndex === -1) {
      prevProfits.push(nextProfit);
    } else if (prevProfits[sameBankIndex].profitability < nextProfit.profitability) {
      prevProfits[sameBankIndex] = nextProfit;
    }
    return prevProfits;
  }, []);

  return bestProfits;
}

export default checkProfits;