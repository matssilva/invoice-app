using AutoMapper;
using InvoiceAppWebApi.Models;
using InvoiceAppWebApi.Repositories;

namespace InvoiceAppWebApi.Business
{
    public class InvoiceBusiness : IInvoiceBusiness
    {
        private readonly IFirestoreRepository _firestoreRepository;
        private readonly IMapper _mapper;

        public InvoiceBusiness(IFirestoreRepository firestoreRepository, IMapper mapper)
        {
            _firestoreRepository = firestoreRepository;
            _mapper = mapper;
        }
        public async Task<IEnumerable<InvoiceModel>> GetAllAsync()
        {
            var invoices = await _firestoreRepository.GetAll();
            return _mapper.Map<IEnumerable<InvoiceModel>>(invoices);
        }
    }
}
