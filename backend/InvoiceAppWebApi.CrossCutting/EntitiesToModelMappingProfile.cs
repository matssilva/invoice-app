using AutoMapper;
using InvoiceAppWebApi.Entities;
using InvoiceAppWebApi.Models;

namespace InvoiceAppWebApi.CrossCutting
{
    public class EntitiesToModelMappingProfile : Profile
    {
        public EntitiesToModelMappingProfile()
        {
            CreateMap<Invoice, InvoiceModel>();
            CreateMap<Address, AddressModel>();
            CreateMap<Item, ItemModel>();
        }
    }
}