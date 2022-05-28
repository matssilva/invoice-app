using Google.Cloud.Firestore;
using Newtonsoft.Json;

namespace InvoiceAppWebApi.Entities
{
    [FirestoreData]
    public class Invoice
    {
        [FirestoreProperty]
        [JsonProperty("id")]
        public string Id { get; set; }
        [FirestoreProperty]
        [JsonProperty("createdAt")]
        public string CreatedAt { get; set; }
        [FirestoreProperty]
        [JsonProperty("paymentDue")]
        public string PaymentDue { get; set; }
        [FirestoreProperty]
        [JsonProperty("description")]
        public string Description { get; set; }
        [FirestoreProperty]
        [JsonProperty("paymentTerms")]
        public int PaymentTerms { get; set; }
        [FirestoreProperty]
        [JsonProperty("clientName")]
        public string ClientName { get; set; }
        [FirestoreProperty]
        [JsonProperty("clientEmail")]
        public string ClientEmail { get; set; }
        [FirestoreProperty]
        [JsonProperty("status")]
        public string Status { get; set; }
        [FirestoreProperty]
        [JsonProperty("senderAddress")]
        public Address SenderAddress { get; set; }
        [FirestoreProperty]
        [JsonProperty("clientAddress")]
        public Address ClientAddress { get; set; }
        [FirestoreProperty]
        [JsonProperty("items")]
        public IEnumerable<Item> Items { get; set; }
        [FirestoreProperty]
        [JsonProperty("total")]
        public double Total { get; set; }
    }
}