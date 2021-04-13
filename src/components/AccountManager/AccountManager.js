import Bank from '../Bank/Bank';
import banks from '../../data/banks';
import styles from './AccountManager.module.scss';
import AccountSummary from '../AccountSummary/AccountSummary';
import useOperateMoney from '../../hooks/useOperateMoney';

const AccountManager = () => {
  const {
    banksState,
    handleCapitalization
  } = useOperateMoney(banks);

  return ( 
    <div>
      <div className={styles.root}>
        {
          banks.map((bank, index) => (
            <Bank 
              key={bank.id}
              id={bank.id}
              name={bank.name}
              L={bank.L}
              L2={bank.L2}
              startInterest={bank.interest}
              money={banksState[index].money}
              onCapitalization={handleCapitalization}
            />
          ))
        }
      </div>
      <AccountSummary 
        banksState={banksState}
      />
    </div>

  );
}
 
export default AccountManager;