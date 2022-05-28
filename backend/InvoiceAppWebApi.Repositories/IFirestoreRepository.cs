namespace InvoiceAppWebApi.Repositories
{
    public interface IFirestoreRepository
    {
        Task<IEnumerable<object>> GetAll();
    }
}