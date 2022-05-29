using Google.Cloud.Firestore;
using Newtonsoft.Json;

namespace InvoiceAppWebApi.Entities
{
    [FirestoreData]
    public class Invoice
    {
        [FirestoreProperty("id")]
        [JsonProperty("id")]
        public string Id { get; set; }
        [FirestoreProperty("createdAt")]
        [JsonProperty("createdAt")]
        public string CreatedAt { get; set; }
        [FirestoreProperty("paymentDue")]
        [JsonProperty("paymentDue")]
        public string PaymentDue { get; set; }
        [FirestoreProperty("description")]
        [JsonProperty("description")]
        public string Description { get; set; }
        [FirestoreProperty("paymentTerms")]
        [JsonProperty("paymentTerms")]
        public int PaymentTerms { get; set; }
        [FirestoreProperty("clientName")]
        [JsonProperty("clientName")]
        public string ClientName { get; set; }
        [FirestoreProperty("clientEmail")]
        [JsonProperty("clientEmail")]
        public string ClientEmail { get; set; }
        [FirestoreProperty("status")]
        [JsonProperty("status")]
        public string Status { get; set; }
        [FirestoreProperty("senderAddress")]
        [JsonProperty("senderAddress")]
        public Address SenderAddress { get; set; }
        [FirestoreProperty("clientAddress")]
        [JsonProperty("clientAddress")]
        public Address ClientAddress { get; set; }
        [FirestoreProperty("items")]
        [JsonProperty("items")]
        public IEnumerable<Item> Items { get; set; }
        [FirestoreProperty("total")]
        [JsonProperty("total")]
        public double Total { get; set; }
    }
}