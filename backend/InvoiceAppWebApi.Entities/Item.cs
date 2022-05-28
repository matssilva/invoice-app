using Newtonsoft.Json;

namespace InvoiceAppWebApi.Entities
{
    public class Item
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
