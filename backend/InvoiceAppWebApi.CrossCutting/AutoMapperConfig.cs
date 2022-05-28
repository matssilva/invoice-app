using AutoMapper;

namespace InvoiceAppWebApi.CrossCutting
{
    public static class AutoMapperConfig
    {
        public static MapperConfiguration RegisterMappings()
        {
            return new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new EntitiesToModelMappingProfile());
                cfg.AddProfile(new ModelToEntitiesMappingProfile());
            });
        }
    }
}
