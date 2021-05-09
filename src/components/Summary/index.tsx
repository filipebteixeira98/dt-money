import { useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      {/* <TransactionsContext.Consumer>
        {(data) => {
          return (
            <p>{data}</p>
          );
        }}
      </TransactionsContext.Consumer> */}
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>$1000.00</strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="Outcomes" />
        </header>
        <strong>- $312.00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>$788.00</strong>
      </div>
    </Container>
  );
}
