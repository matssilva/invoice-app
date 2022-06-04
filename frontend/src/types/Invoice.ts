import { Address } from './Address';
import { InvoiceItem } from './InvoiceItem';

export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Array<InvoiceItem>;
  total: number;
}
