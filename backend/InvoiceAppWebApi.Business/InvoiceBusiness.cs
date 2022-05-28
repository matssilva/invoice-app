using InvoiceAppWebApi.Repositories;

namespace InvoiceAppWebApi.Business
{
    public class InvoiceBusiness : IInvoiceBusiness
    {
        private readonly IFirestoreRepository _firestoreRepository;
        public InvoiceBusiness(IFirestoreRepository firestoreRepository)
        {
            _firestoreRepository = firestoreRepository;
        }
        public async Task<IEnumerable<object>> GetAllAsync()
        {
            return await _firestoreRepository.GetAll();
        }
    }
}
