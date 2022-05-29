using Newtonsoft.Json;

namespace InvoiceAppWebApi.Models
{
    public class InvoiceModel
    {
        [JsonProperty("id")]
        public string? Id { get; set; }

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
        public AddressModel SenderAddress { get; set; }

        [JsonProperty("clientAddress")]
        public AddressModel ClientAddress { get; set; }

        [JsonProperty("items")]
        public IEnumerable<ItemModel> Items { get; set; }

        [JsonProperty("total")]
        public double Total { get; set; }
    }
}