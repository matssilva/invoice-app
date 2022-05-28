using InvoiceAppWebApi.Entities;

namespace InvoiceAppWebApi.Repositories
{
    public interface IFirestoreRepository
    {
        Task<IEnumerable<Invoice>> GetAll();
    }
}