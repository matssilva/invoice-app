using Newtonsoft.Json;

namespace InvoiceAppWebApi.Entities
{
    public class Invoice
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("createdAt")]
        public string CreatedAt { get; set; }

        [JsonProperty("paymentDue")]
        public string PaymentDue { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("paymentTerms")]
        public int PaymentTerms { get; set; }

        [JsonProperty("clientName")]
        public string ClientName { get; set; }

        [JsonProperty("clientEmail")]
        public string ClientEmail { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonProperty("senderAddress")]
        public Address SenderAddress { get; set; }

        [JsonProperty("clientAddress")]
        public Address ClientAddress { get; set; }

        [JsonProperty("items")]
        public IEnumerable<Item> Items { get; set; }

        [JsonProperty("total")]
        public double Total { get; set; }
    }
}