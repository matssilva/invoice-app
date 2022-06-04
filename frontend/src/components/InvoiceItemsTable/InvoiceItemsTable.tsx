import React from 'react';
import { LabelBig, LabelMedium, LabelSmall } from '../../shared/styles';
import { InvoiceItem } from '../../types';
import { Table, TableFooter } from './style';

interface Props {
  items: Array<InvoiceItem>;
  total: number;
}

const InvoiceItemsTable: React.FC<Props> = ({ items, total }) => (
  <>
    <Table>
      <thead>
        <tr>
          <th>
            <LabelSmall>Item name</LabelSmall>
          </th>
          <th>
            <LabelSmall>QTY.</LabelSmall>
          </th>
          <th>
            <LabelSmall>Price</LabelSmall>
          </th>
          <th>
            <LabelSmall>Total</LabelSmall>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.name}>
            <td>
              <LabelBig>{item.name}</LabelBig>
            </td>
            <td>
              <LabelMedium>{item.quantity}</LabelMedium>
            </td>
            <td>
              <LabelMedium fWeight="700">R$ {item.price}</LabelMedium>
            </td>
            <td>
              <LabelMedium fWeight="700" color="#fff">
                R$ {item.total}
              </LabelMedium>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <TableFooter>
      <LabelSmall>Amout due</LabelSmall>
      <div className="total">R$ {total}</div>
    </TableFooter>
  </>
);

export default InvoiceItemsTable;
