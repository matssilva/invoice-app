import { Address } from "./Address";
import { InvoiceItem } from "./InvoiceItem";

export interface Invoice {
  id: String;
  createdAt: String;
  paymentDue: String;
  description: String;
  paymentTerms: number;
  clientName: String;
  clientEmail: String;
  status: String;
  senderAddress: Address;
  clientAddress: Address;
  items: Array<InvoiceItem>;
  total: number;
}
