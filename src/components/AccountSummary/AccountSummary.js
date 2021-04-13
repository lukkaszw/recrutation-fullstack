import React, { useMemo } from 'react';
import styles from './AccountSummary.module.scss';

const AccountSummary = ({ banksState }) => {

  const totalMoney = useMemo(() => {
    return banksState.reduce((prevValue, bankState) => {
      return prevValue + bankState.money;
    }, 0);
  }, [banksState])

  return ( 
    <div className={styles.root}>
      Suma zgromadzonych środków: 
      <span className={styles.important}>
        {totalMoney} zł
      </span>
    </div>
  );
}
 
export default AccountSummary;