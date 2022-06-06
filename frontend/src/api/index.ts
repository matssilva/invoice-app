import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Invoice } from '../types/Invoice';

const createAxiosConfig = (): AxiosRequestConfig => ({
  headers: {
    'Content-Type': 'aplication/json',
  },
});

const baseUlr = 'https://localhost:44381/api';

const instance = axios.create({
  baseURL: baseUlr,
});

// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem('auth_token');

//   // eslint-disable-next-line no-param-reassign
//   if (token) config.headers.Authorization = `Bearer ${token}`;

//   return config;
// });

// async function post<T>(
//   url: string,
//   body?: unknown,
//   config?: AxiosRequestConfig,
// ): Promise<AxiosResponse<T>> {
//   const [responseWithDelay] = await Promise.all([
//     instance.post(url, body, axiosConfig(config)),
//     new Promise((resolve) => setTimeout(resolve, 500)),
//   ]);

//   return responseWithDelay;
// }

// async function put<T>(
//   url: string,
//   body?: unknown,
//   config?: AxiosRequestConfig,
// ): Promise<AxiosResponse<T>> {
//   const [responseWithDelay] = await Promise.all([
//     instance.put(url, body, axiosConfig(config)),
//     new Promise((resolve) => setTimeout(resolve, 500)),
//   ]);

//   return responseWithDelay;
// }

async function deleteInvoiceAsync(invoiceId: string): Promise<AxiosResponse> {
  const response = await instance.delete(`/Invoice?id=${invoiceId}`);
  return response;
}

async function getInvoicesAsync<Invoice>(): Promise<AxiosResponse<Invoice>> {
  const [responseWithDelay] = await Promise.all([
    instance.get('/Invoice', createAxiosConfig()),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);

  return responseWithDelay;
}

const api = { getInvoicesAsync, deleteInvoiceAsync };

export default api;
