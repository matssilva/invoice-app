using AutoMapper;
using InvoiceAppWebApi.Entities;
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

        public async Task AddAsync(InvoiceModel invoiceModel)
        {
            await _firestoreRepository.AddAsync(_mapper.Map<Invoice>(invoiceModel));
        }

        public async Task DeleteAsync(string id)
        {
            await _firestoreRepository.DeleteAsync(id);
        }

        public async Task<IEnumerable<InvoiceModel>> GetAllAsync()
        {
            var invoices = await _firestoreRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<InvoiceModel>>(invoices);
        }
    }
}
