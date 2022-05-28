namespace InvoiceAppWebApi.Business
{
    public interface IInvoiceBusiness
    {
        Task<IEnumerable<object>> GetAllAsync();
    }
}