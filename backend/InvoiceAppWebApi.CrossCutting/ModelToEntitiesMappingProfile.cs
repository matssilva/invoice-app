using AutoMapper;
using InvoiceAppWebApi.Entities;
using InvoiceAppWebApi.Models;

namespace InvoiceAppWebApi.CrossCutting
{
    public class ModelToEntitiesMappingProfile : Profile
    {
        public ModelToEntitiesMappingProfile()
        {
            CreateMap<InvoiceModel, Invoice>();
            CreateMap<AddressModel,Address > ();
            CreateMap<ItemModel, Item>();
        }
    }
}