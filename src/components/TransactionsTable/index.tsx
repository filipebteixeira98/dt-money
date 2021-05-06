import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">$12000.00</td>
            <td>Software engineering</td>
            <td>04/23/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">- $1500.00</td>
            <td>Home</td>
            <td>05/13/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
