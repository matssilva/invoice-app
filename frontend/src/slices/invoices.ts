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
  },
});

const { reducer } = invoicesSlice;
export const getInvoices = (state: RootState) => state.invoices;
export default reducer;
