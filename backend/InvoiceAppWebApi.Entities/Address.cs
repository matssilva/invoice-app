using Newtonsoft.Json;

namespace InvoiceAppWebApi.Entities
{
    public class Address
    {
        [JsonProperty("street")]
        public string Street { get; set; }

        [JsonProperty("city")]
        public string City { get; set; }

        [JsonProperty("postCode")]
        public string PostCode { get; set; }

        [JsonProperty("country")]
        public string Country { get; set; }
    }
}
