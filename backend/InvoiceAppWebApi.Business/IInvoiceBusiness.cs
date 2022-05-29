using InvoiceAppWebApi.Models;

namespace InvoiceAppWebApi.Business
{
    public interface IInvoiceBusiness
    {
        Task<IEnumerable<InvoiceModel>> GetAllAsync();
        Task<string> AddAsync(InvoiceModel invoiceModel);
        Task DeleteAsync(string id);
        Task UpdateAsync(InvoiceModel invoice);
    }
}