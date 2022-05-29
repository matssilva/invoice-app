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

        public async Task<string> AddAsync(InvoiceModel invoiceModel)
        {
            string id = GenerateId();
            invoiceModel.Id = id;
            await _firestoreRepository.SaveAsync(_mapper.Map<Invoice>(invoiceModel));
            return id;
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

        public async Task UpdateAsync(InvoiceModel invoiceModel)
        {
            await _firestoreRepository.SaveAsync(_mapper.Map<Invoice>(invoiceModel));
        }

        private static string GenerateId()
        {
            return $"{GenerateRandowChar()}{GenerateRandowChar()}{GenerateRandowNumber()}{GenerateRandowNumber()}{GenerateRandowNumber()}{GenerateRandowNumber()}";
        }
        private static string GenerateRandowChar()
        {
            Random rnd = new();
            char randomChar = (char)rnd.Next('a', 'z');
            return randomChar.ToString().ToUpper();
        }

        private static int GenerateRandowNumber()
        {
            Random rnd = new();
            int randomNumber = rnd.Next(0, 9);
            return randomNumber;
        }
    }
}
