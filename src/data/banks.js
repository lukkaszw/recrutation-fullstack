import generateInterest from '../utils/generateInterest';
const generateL = () => Math.floor(Math.random() * 6 + 5);
const generateL2 = () => Math.floor(Math.random() * 15 + 1);


const banks = [
  {
    id: '1',
    name: 'BankA',
    L: generateL(),
    L2: generateL2(),
    money: 15000,
    interest: generateInterest(),
  },
  {
    id: '2',
    name: 'BankB',
    L: generateL(),
    L2: generateL2(),
    money: 15000,
    interest: generateInterest(),
  },
  {
    id: '3',
    name: 'BankC',
    L: generateL(),
    L2: generateL2(),
    money: 15000,
    interest: generateInterest(),
  },
  {
    id: '4',
    name: 'BankD',
    L: generateL(),
    L2: generateL2(),
    money: 15000,
    interest: generateInterest(),
  },
];

export default banks;