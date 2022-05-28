using InvoiceAppWebApi.Models;

namespace InvoiceAppWebApi.Business
{
    public interface IInvoiceBusiness
    {
        Task<IEnumerable<InvoiceModel>> GetAllAsync();
    }
}