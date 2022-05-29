using InvoiceAppWebApi.Entities;

namespace InvoiceAppWebApi.Repositories
{
    public interface IFirestoreRepository
    {
        Task<IEnumerable<Invoice>> GetAllAsync();
        Task DeleteAsync(string id);
        Task SaveAsync(Invoice invoice);
    }
}