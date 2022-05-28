using Newtonsoft.Json;

namespace InvoiceAppWebApi.Models
{
    public class ItemModel
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("quantity")]
        public int Quantity { get; set; }

        [JsonProperty("price")]
        public double Price { get; set; }

        [JsonProperty("total")]
        public double Total { get; set; }
    }
}
