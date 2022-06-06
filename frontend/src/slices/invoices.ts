import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from '../api';
import { RootState } from '../store';
import { Invoice } from '../types';

interface State {
  status: String;
  data: Array<Invoice>;
  error: String | null;
}

const initialState: State = {
  status: 'idle',
  data: [],
  error: null,
};

export const getInvoicesAsync = createAsyncThunk('invoices/get', async () => {
  const response = await api.getInvoicesAsync();
  return response.data as Array<Invoice>;
});

export const deleteInvoiceAsync = createAsyncThunk(
  'invoices/delete',
  async (invoiceId: string) => {
    const response = await api.deleteInvoiceAsync(invoiceId);
    return response.data as string;
  }
);

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getInvoicesAsync.fulfilled,
      (state, action: PayloadAction<[] | Array<Invoice>>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      }
    );
    builder.addCase(
      deleteInvoiceAsync.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.status = 'succeeded';
        state.data = state.data.filter((item) => item.id !== action.payload);
      }
    );
  },
});

const { reducer } = invoicesSlice;
export const getInvoices = (state: RootState) => state.invoices;
export default reducer;
