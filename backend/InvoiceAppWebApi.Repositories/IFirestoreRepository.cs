using InvoiceAppWebApi.Entities;

namespace InvoiceAppWebApi.Repositories
{
    public interface IFirestoreRepository
    {
        Task<IEnumerable<Invoice>> GetAllAsync();
        Task AddAsync(Invoice invoice);
        Task DeleteAsync(string id);
    }
}