using Newtonsoft.Json;

namespace InvoiceAppWebApi.Models
{
    public class AddressModel
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
