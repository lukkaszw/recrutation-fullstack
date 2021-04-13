import React, { useEffect } from 'react';
import useGenerateInterest from '../../hooks/useGenerateInterest';
import styles from './Bank.module.scss';

const Bank = ({ id, name, L, L2, money, onCapitalization, startInterest }) => {

  const {
    interest,
    handleGenerateInterest,
  } = useGenerateInterest(startInterest);

  useEffect(() => {
    const intervalId = setInterval(() => {
      onCapitalization(id, interest);
      handleGenerateInterest();
    }, L * 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [L, id, interest, onCapitalization, handleGenerateInterest]);

  return ( 
    <div className={styles.root}>
      <div className={styles.header}>
        <h2>
          {name}
        </h2>
      </div>
      <div className={styles.part}>
        <span>Czas kapitalizacji:</span> {L} s.
      </div>
      <div className={styles.part}>
        <span>Prowizja:</span> {L2} %
      </div>
      <div className={styles.part}>
        <span>Oprocentowanie:</span> 
        <span className={styles.important}>{interest} %</span>
      </div>
      <div className={styles.part}>
        <span>Stan konta:</span>
        <span className={styles.money}>{money} zł</span>
      </div>
    </div>
  );
}
 
export default Bank;